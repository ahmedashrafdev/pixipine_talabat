import camelCase from 'lodash/camelCase'

export default store => {
  store.subscribe((mutation, state) => {
      let pos =  mutation.type.lastIndexOf("SUCCESS");
      if (pos !== -1) {
        let poss = mutation.type.indexOf("/");
        if(poss !== -1){
            let type= mutation.type.substr(poss + 1, mutation.type.length)
            type = camelCase(type.substring(0, type.indexOf('SUCCESS') - 1))
            let moduleName =  mutation.type.substr(0 ,poss + 1) 
            store.commit('SET_PENDING', { type , moduleName , pending: false })
        }else{
            let type = camelCase(mutation.type.substring(0, mutation.type.indexOf('SUCCESS') - 1))
            store.commit('SET_PENDING', { type , moduleName:null , pending: false })
        }
      
    }
  })

  store.subscribeAction(action => {
      if (action.payload && action.payload.isAjax === true)
      store.commit('SET_ACTION', { action })
  })
}