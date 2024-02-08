<template>
    <main>
        <header v-if="isNav == true" :class="[currentNav != '' ? 'linkeNavHover': ''] + [$route.path == '/' ? ' navFixed' : '']">
            <div class="currentNav">
                <div v-if="currentNav != ''" @click="closeDropDown"><font-awesome-icon  icon="fa-solid fa-chevron-left" /></div>
                <div v-if="currentNav != ''"><p>{{ currentNav }}</p></div>
                <div @click="isNav = false" :class="currentNav == '' ? 'closeRight': ''"><font-awesome-icon icon="fa-solid fa-x" /></div>
            </div>
            <div :class=" currentNav == '' ? 'navShow' : 'navHide'" class="mainNav">
                <div class="headerElement">
                    <div><NuxtLink class="logo" :class="currentNav == '' ? store.menuColor : ''" to="/">Car</NuxtLink></div>
                </div>
                <div v-if="$route.fullPath != `/products/details/${$route.params.id}`" class="headerElement">
                    <div class="navBar">
                    <ElementsNavbarLinkCom :isMain="true" class="navLink" v-for="NavLink in NavLinks" :hasMobileSub="NavLink.hasMobileSub" :link="NavLink.link" :title="NavLink.title"></ElementsNavbarLinkCom>
                    </div>
                </div>
                <div v-if="$route.fullPath != `/products/details/${$route.params.id}`" class="headerElement">
                    <div class="icons">
                        <ElementsNavbarLinkCom class="iconLink iconTextLink" v-show="NavIcon.title != null" v-for="NavIcon in NavIcons" :isMain="true" :link="NavIcon.link" :isIcon="false" :title="NavIcon.title"></ElementsNavbarLinkCom>
                        <ElementsNavbarLinkCom class="iconLink" :class="NavIcon.title == 'support' ? 'iconNoText' : ''"  v-for="NavIcon in NavIcons" :isMain="true" :link="NavIcon.link" :isIcon="true" :icon="NavIcon.icon"></ElementsNavbarLinkCom>
                    </div>
                </div>
            </div>
                <div class="navDropdown" v-if="currentNav != ''" :class="currentNav != ''? 'dropDownOpen': 'dropDownClosed'">
                <div class="dropDownContainer" :class="'dropDownProdcuts-' + currentProductCount ">
                    <div class="imageLinks" v-for="DropDownLink in DropDownLinks" v-show="currentNav == DropDownLink.type">
                        <ElementsNavbarDropdownCom :imageLinks="DropDownLink.imageLinks"></ElementsNavbarDropdownCom>
                    </div>
                    <div class="devider"></div>
                    <div class="textLinks" v-for="DropDownLink in DropDownLinks" v-show="currentNav == DropDownLink.type">
                        <div :class=" textLink.linkcatTitle != null ? 'linkTextFlexContainer': ''" v-for="textLink in DropDownLink.textLinks">
                            <p>{{ textLink.linkcatTitle }}</p>
                            <ElementsNavbarLinkCom v-for="links of textLink.links" :link="links.link" :title="links.title"></ElementsNavbarLinkCom>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div @mouseenter="resetCurrent">
            <div class="mobileNav">
            <div class="mobileLogo">
                <div><NuxtLink class="logo" :class="currentNav == '' ? store.menuColor : ''" to="/">Car</NuxtLink></div>
            </div>
                <div v-if="isNav == false" class="showNavBtn mobileNavBtn" @click="isNav = true, store.flipNavDrop('') ">Menu</div>
            </div>
            <div v-if="checkModal == true" class="modalBg"></div>
                <slot></slot>
        </div>
    </main>
</template>
<script setup>
	import { useStore } from '~/store/glStore'
    const currentNav = computed(()=> store.isnavDrop)
    const checkModal = computed(()=> store.checkModal)
    const currentProductCount = ref(0)
    const isNav = ref(true)
    const store = useStore() 
    const NavLinks = ref([
        {
            link:'#',
            title:'Biler',
            hasMobileSub:true
        },
        {
            link:'#',
            title:'Energi',
            hasMobileSub:true
        },
        {
            link:'#',
            title:'Opladning',
            hasMobileSub:true
        },
        {
            link:'#',
            title:'Opdag',
            hasMobileSub:false
        },
        {
            link:'#',
            title:'Webshop',
            hasMobileSub:false
        },
    ])
    const NavIcons = ref([
        {
            link:'#',
            title:'support',
            icon:"fa-solid fa-question"
        },
        {
            link:'#',
            icon:"fa-solid fa-globe"
        },
        {
            link:'#',
            icon:"fa-solid fa-user"
        },
        
    ])
    const DropDownLinks  = ref([
        {
            type:'Biler',
            imageLinks:[
                {
                    link:'#',
                    title:"Car 1",
                    image:"/images/nav/cars/carBlue.png"
                },
                {
                    link:'#',
                    title:"Car 2",
                    image:"/images/nav/cars/carRed.png"
                },
                {
                    link:'#',
                    title:"Car 3",
                    image:"/images/nav/cars/carBlack.png"
                },
                {
                    link:'#',
                    title:"Car 4",
                    image:"/images/nav/cars/carSilver.png"
                },
                {
                    link:'#',
                    title:"Car 5",
                    image:"/images/nav/cars/carWhite.png"
                },
            ],
            textLinks:[
            {
            links:[

                {
                    link:'#',
                    title:"Prøvetur"
                },
                {
                    link:'#',
                    title:"Indbeytning"
                },
                {
                    link:'#',
                    title:"Forudkonfigurerede"
                },
                {
                    link:'#',
                    title:"Certified Pre-Owened"
                },
                {
                    link:'#',
                    title:"Firmabil"
                },
                {
                    link:'#',
                    title:"Roadster"
                },
                ]
                }
            ]
        },
        {
            type:'Energi',
            imageLinks:[

                {
                    link:'#',
                    title:"Energi 1",
                    image:"/images/nav/cars/carBlue.png"
                },
                {
                    link:'#',
                    title:"Energi 2",
                    image:"/images/nav/cars/carRed.png"
                },
            ],
            textLinks:[
                {
                links:[
                {
                    link:'#',
                    title:"Prøvetur"
                },
                {
                    link:'#',
                    title:"Indbeytning"
                },
                {
                    link:'#',
                    title:"Forudkonfigurerede"
                },
                {
                    link:'#',
                    title:"Certified Pre-Owened"
                },
                {
                    link:'#',
                    title:"Firmabil"
                },
                {
                    link:'#',
                    title:"Roadster"
                },
                ]
             }
            ]
        },
        {
            type:'Opladning',
            imageLinks:[
                {
                    link:'#',
                    title:"Opladning 1",
                    image:"/images/nav/cars/carBlue.png"
                },
                {
                    link:'#',
                    title:"Opladning 2",
                    image:"/images/nav/cars/carRed.png"
                },
                {
                    link:'#',
                    title:"Opladning 3",
                    image:"/images/nav/cars/carBlack.png"
                },
            ],
            textLinks:[
                {
                    links:[
                {
                    link:'#',
                    title:"Prøvetur"
                },
                {
                    link:'#',
                    title:"Indbeytning"
                },
                {
                    link:'#',
                    title:"Forudkonfigurerede"
                },
                {
                    link:'#',
                    title:"Certified Pre-Owened"
                },
                {
                    link:'#',
                    title:"Firmabil"
                },
                ]
            }
            ]
        },
        {
            type:'Opdag',
            imageLinks:[
            ],
            textLinks:[
                {
                linkcatTitle: 'Ressourcer',
                links:[
                {
                    link:'#',
                    title:"Prøvetur"
                },
                {
                    link:'#',
                    title:"Indbeytning"
                },
                {
                    link:'#',
                    title:"Forudkonfigurerede"
                },
                {
                    link:'#',
                    title:"Certified Pre-Owened"
                },
                ]
                },
                {
                linkcatTitle: 'Lok',
                links:[
                {
                    link:'#',
                    title:"Prøvetur"
                },
                {
                    link:'#',
                    title:"Indbeytning"
                },
                {
                    link:'#',
                    title:"Forudkonfigurerede"
                },
                {
                    link:'#',
                    title:"Certified Pre-Owened"
                },
                ]
                },
                {
                linkcatTitle: 'Firma',
                links:[
                {
                    link:'#',
                    title:"Prøvetur"
                },
                {
                    link:'#',
                    title:"Indbeytning"
                },
                {
                    link:'#',
                    title:"Forudkonfigurerede"
                },
                ]
                },
                ],
        },
        {
            type:'Webshop',
            imageLinks:[
                {
                    link:'#',
                    title:"Car 1",
                    image:"/images/nav/cars/carBlue.png"
                },
                {
                    link:'#',
                    title:"Car 2",
                    image:"/images/nav/cars/carRed.png"
                },
                {
                    link:'#',
                    title:"Car 3",
                    image:"/images/nav/cars/carBlack.png"
                },
                {
                    link:'#',
                    title:"Car 4",
                    image:"/images/nav/cars/carSilver.png"
                },
            ],
        },
    ])
    function setProductCount(){
        for(let dropDownLink of DropDownLinks.value){
           if(dropDownLink.type == currentNav.value){
            currentProductCount.value = dropDownLink.imageLinks.length
           }
        }
    }
    function closeDropDown(){
        store.flipNavDrop("")
    }
    function checkNavMobile(){
        const mobile = window.matchMedia("(min-width:1200px)")
        window.addEventListener('resize',()=>{
            if(mobile.matches){
                isNav.value = true
            }else {
                isNav.value = false
            }
        })
    }
        function resetCurrent(){
	const mobile = window.matchMedia("(min-width:1200px)")
		if(mobile.matches){
            store.flipNavDrop('')
	}
	}       
    onMounted(()=>{
        checkNavMobile()
    })
watch(currentNav, async(newValue, oldValue)=>{
    if(newValue != oldValue){
        setProductCount()
    }
})
</script>
<style lang="scss" scoped>
@import"@/assets/scss/colors";
@import"@/assets/scss/btns";
    header{
        display: grid;
        grid-template-columns:minmax(0, 1fr);
        grid-template-rows:56px 100%;
        align-items: center;
        min-height:56px;
        height: fit-content;
        width:100%;
        max-width: 100%;
        background-color: white;
        min-width: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 99;
        .logo{
            transition: 250ms;
        }
        &.navFixed{
            position: fixed;
        }
        .navShow{
            display: flex;
            flex-direction: column;
            align-self: start;
        }
        .navHide{
            display: none;
        }
        .headerElement{
            max-width: 100%;
            display: flex;
            flex-direction: column;
            &:nth-child(1){
                display: none;
            }
            .navBar{
                flex-direction: column;
            }
        }
    }
    .mobileNav{
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem 0 1rem;
    }
    .showNavBtn{
        z-index: 3;
        cursor: pointer;
        width:fit-content;
    }
    .navBar{
        display: flex;
        .navLink{
            margin: 8px;

        }
    }
    .icons{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .iconNoText{
        display: none;
    }
    .iconLink{
        margin: 8px;
    }
    .navDropdown{
        grid-column: span 1;
        max-width: 100%;
        padding-top: 3rem;
        align-self: start;
        .dropDownContainer{
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            max-width: 100%;
            .textLinks{
                grid-column: span 12;
            }
            .imageLinks{
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                grid-column: span 12;
                width: 100%;
                gap:32px;
                margin-bottom: 2rem;
                animation: imageLinkFadeIn 1s ease forwards;
                opacity: 0;
            }
            @keyframes imageLinkFadeIn {
                from{
                    opacity: 0;
                }
                to{
                    opacity: 1;
                }
            }
            .devider{
                grid-column: span 12;
                height: 1px;
                width: 100%;
                justify-self: center;
                background-color: $lightGray;
                margin-bottom: 2rem;
            }
        }
    }
    .currentNav{
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        align-items: center;
        p{
            font-weight: bold;
        }
        .closeRight{
            cursor: pointer;
            margin-left: auto;
        }
    }
    .modalBg{
    background-color: hsla(0,0%,10%,50%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index:100;
    }
    @media (min-width:450px){
        header{
        }
        .navDropdown{
            grid-column: span 2;
            .dropDownContainer{
                .imageLinks{
                    gap:12px;
                    grid-template-columns:repeat(2, 12fr);
                }
            }
        }
    }
    @media (min-width:600px){
        header{
        }
        .navDropdown{
            grid-column: span 3;
            .dropDownContainer{
                .imageLinks{
                    gap:12px;
                    grid-template-columns:repeat(3, 12fr);
                }
            }
        }
    }
    @media (min-width:900px){
        header{
            .navShow{
            display: flex;
            }
        .headerElement{
            max-width: 100%;
            display: flex;
            flex-direction: column;
            &:nth-child(1){
                display: none;
            }
            .navBar{
                flex-direction: column;
            }
        }
        }
        .navDropdown{
            grid-column: span 4;
            .dropDownContainer{
                .imageLinks{
                    gap:12px;
                    grid-template-columns:repeat(4, 12fr);
                }
            }
        }

    }
    @media (min-width:1200px){
        .mobileNav{
            display: none;
        }
        header{
            background-color: transparent;
            height: fit-content;

            .headerElement{
                &:nth-child(1){
                    display: block;
                }
            }
            .mainNav{
                flex-direction: row;
                align-self: unset;
            }
            .navHide{
                display: flex;
            }
            .icons{
                flex-direction: row;
            }
        }
        .mainNav{
            max-width: 100%;
            .headerElement{
                max-width: 100%;
            }

        }
        header::before{
                content: '';
                display: block;
                background-color: white;
                height: 90%;
                width: 100%;
                opacity: 0;
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                transition:1s;
            }
            header.linkeNavHover::before{
                transition: 1s;
                height: 110%;
                opacity: 100%;
            }
        .mainNav{
            display: flex;
            justify-content: space-between;
            max-width: 100%;
            align-items: baseline;
            padding:0 3rem;
            .headerElement{
                max-width: fit-content;
                flex-direction: row;
                min-width:calc(33% - 6rem);
                &:nth-child(1){
                    justify-content: flex-start;
                }
                &:nth-child(2){
                    justify-content: center;
                }
                &:nth-child(3){
                    justify-content: flex-end;
                }
                .navBar{
                    flex-direction: row;
                }
            }
        }
        .navDropdown{
            .imageLinks{
                grid-template-columns:repeat(3, 12fr);
            }
        }
        .currentNav{
            display: none;
        }
        .iconTextLink{
            display: none;
        }
        .iconNoText{
            display: block;
        }
    }

    @media (min-width:1260px){
        header{
            grid-template-columns: minmax(0, 1fr);
            .navShow{
            display: flex;
            }
            .navHide{
                display: flex;
            }
        }
        .mainNav{
            display: flex;
            justify-content: space-between;
            max-width: 100%;
            align-items: baseline;
            padding:0 3rem;
        }
        .navDropdown{
            grid-column: span 4;
            .dropDownContainer{
                gap: 2rem;
    
            .devider{
                grid-column: 9/10;
                width: 1px;
                height: 100%;
                margin-bottom: 0;
            }

                .imageLinks{
                    margin-bottom: 0;
                    gap:12px;
                }
                

            }
            .dropDownProdcuts-5{
                .imageLinks{
                    grid-template-columns:repeat(4, 1fr);
                    grid-column: 2/9;
                }
                .textLinks{
                grid-column: 10/12;
                }
                .devider{
                    grid-column: 9/10;
                }
            }
            .dropDownProdcuts-4{
                .imageLinks{
                    grid-template-columns:repeat(4, 1fr);
                    grid-column: 3/11;
                }
                .textLinks{
                    display: none;
                }
                .devider{
                    display: none;
                }
            }
            .dropDownProdcuts-3{
                .imageLinks{
                    grid-template-columns:repeat(3, 1fr);
                    grid-column: 3/8;
                }
                .textLinks{
                    grid-column: 9/12; 
                }
                .devider{
                    grid-column: 8/9;
                }
            }
            .dropDownProdcuts-2{
                .imageLinks{
                    grid-template-columns:repeat(2, 1fr);
                    grid-column: 4/7;
                }
                .textLinks{
                    grid-column: 8/12; 
                }
                .devider{
                    grid-column: 7/8;
                }
            }
            .dropDownProdcuts-0{
            .imageLinks{
                    grid-template-columns:repeat(2, 1fr);
                    display: none;
                }
                .textLinks{
                    grid-column: 4/10;
                    display: grid;
                    grid-template-columns: repeat(3,1fr);
                    .linkTextFlexContainer{
                }
                }
                .devider{
                   display: none;
                }
        }
        }
        
        .dropDownOpen{
            overflow: hidden;
            animation: dropDownOpen 1s ease forwards;
        }
        
        @keyframes dropDownOpen {
            from{
                opacity: 0;
                padding-bottom: 0;
            }
            to{
                opacity: 1;
                padding-bottom: 2rem;
            }
        }
        .dropDownClosed{
            overflow: hidden;
            animation: dropDownClosed 1s ease forwards;
        }
        @keyframes dropDownClosed {
            from{
                opacity: 1;
                padding-bottom: 2rem;
            }
            to{
                opacity: 0;
                padding-bottom: 0;
            }
        }
    }
</style>