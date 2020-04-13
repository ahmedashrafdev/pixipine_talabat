<template>
  <div class="menu-page block md:flex">
    <div
      class="categories h-mincontent hidden md:block w-56 shadow py-4 border border-grey-500 solid rounded-sm"
    >
      <h3 class="px-5 pb-4   border-b border-grey-500 solid">{{$t('categories')}}</h3>
      <ul class=" ">
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer active text-sm py-2"
        >
          most selling
        </li>
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2"
        >
          sandwitches
        </li>
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2"
        >
          salad
        </li>
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2"
        >
          starters
        </li>
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2"
        >
          burgers
        </li>
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2"
        >
          pasta
        </li>
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2"
        >
          juices
        </li>
        <li
          @click="setCategory('category', $event)"
          class="hover:bg-gray-200 text-gray-700 px-5 cursor-pointer text-sm py-2"
        >
          soft drinks
        </li>
      </ul>
    </div>
    <div class="menu flex-1 px-0 sm:px-4">
      <input
        type="text"
        :placeholder="$t('search_placeholder')"
        class="border border-gray-300 w-full p-2"
      />
      <ul class="items">
        <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown lg:text-lg md:text-md text-xs">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex flex-no-wrap justify-between p-3">
                <div class="left flex flex-no-wrap ">
                  <a href="#" class="mr-3 h-mincontent w-48 img p-1 border border-gray-200">
                    <img
                      class="w-full h-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data text-tiny sm:text-sm lg:text-base sm:text-sm">
                    <a href="" class="text-black">Ana Now Fries</a>
                    <p class="text-gray-600 pr-0 sm:pr-32">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right text-tiny lg:text-base sm:text-sm">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-center mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              
             
            </ul>
          </div>
        </li>
        <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Ana Now Fries</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Pizza</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pizza with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b border-gray-200 item flex hover:bg-gray-200 cursor-pointer justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">pasta</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pasta with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Ana Now Fries</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Pizza</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pizza with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b border-gray-200 item flex hover:bg-gray-200 cursor-pointer justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">pasta</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pasta with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Ana Now Fries</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Pizza</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pizza with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b border-gray-200 item flex hover:bg-gray-200 cursor-pointer justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">pasta</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pasta with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
         <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Ana Now Fries</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Pizza</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pizza with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b border-gray-200 item flex hover:bg-gray-200 cursor-pointer justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">pasta</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pasta with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Ana Now Fries</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Pizza</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pizza with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b border-gray-200 item flex hover:bg-gray-200 cursor-pointer justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">pasta</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pasta with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Ana Now Fries</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Pizza</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pizza with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b border-gray-200 item flex hover:bg-gray-200 cursor-pointer justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">pasta</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pasta with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="w-full overflow-hidden">
          <div
            @click.prevent="openMenuItem"
            class="heading cursor-pointer menu-item-heading flex justify-between bg-gray-200 text-blace mt-3 p-3"
          >
            <a href="#">Most selling</a>
            <font-awesome-icon
              class="hover:text-primary"
              size="lg"
              icon="chevron-down"
            ></font-awesome-icon>
          </div>
          <div class="overflow-hidden mt-3">
            <ul class="category-items dropdown">
              <li
                class="border-b rounded hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Ana Now Fries</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Fries with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b hover:bg-gray-200 cursor-pointer border-gray-200 item flex justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">Pizza</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pizza with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
              <li
                class="border-b border-gray-200 item flex hover:bg-gray-200 cursor-pointer justify-between p-3">
                <div class="left flex">
                  <a href="#" class="mr-3 h-auto w-40 img p-1 border border-gray-200">
                    <img
                      class="h-full w-auto"
                      src="https://images.deliveryhero.io/image/talabat/MenuItems/Ana_Now_fries_636891079479239569.jpg?width=68&height=60"
                      alt=""
                      srcset=""
                    />
                  </a>
                  <div class="meta-data">
                    <a href="" class="text-black text-sm">pasta</a>
                    <p class="text-gray-600 pr-32 text-sm">
                      Pasta with ana now special sauce, bacon, maple, mushroom &
                      herbs
                    </p>
                  </div>
                </div>
                <div class="right">
                  <span class="price">KD18.00</span>
                  <div class="rating">
                    <img
                     class="w-full h-auto"
                      src="https://www.talabat.com/images/talabat/rating-3.5.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="w-full  text-right mt-3">
                    <font-awesome-icon
                      class="hover:text-primary text-secondary"
                      size="lg"
                      icon="plus-circle"
                    ></font-awesome-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <menu-cart class="hidden lg:block"/>
  </div>
</template>

<script>
import MenuCart from "@/components/MenuCart.vue";

export default {
  name: "menuPage",
  components: {
    "menu-cart": MenuCart,
  },
  methods: {
    openMenuItem(e) {
      let element = e.target.closest(".menu-item-heading").parentElement;
      let menu = element.lastChild.firstChild;
      menu.classList.toggle("active");
      console.log(menu);
    },
    setCategory(category, e) {
      let element = e.target;
      let siblings = element.parentElement.childNodes;
      siblings.forEach((sibling) => {
        sibling.classList.remove("active");
      });
      element.classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.categories ul li.active {
  border-left: 3px solid;
  @apply border-primary;
  @apply bg-gray-200;
}

.category-items.dropdown {
  transform: translateY(-100%);
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in;
  &.active {
  height: 100%;

    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>
