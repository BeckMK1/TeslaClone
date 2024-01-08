<template>
    <main>
        <header>
            <div :class=" currentNav == '' ? 'navShow' : 'navHide'" class="mainNav">
                <div class="headerElement">
                    <div><NuxtLink class="logo" to="#">Car</NuxtLink></div>
                </div>
                <div class="headerElement">
                    <div class="navBar">
                    <ElementsNavbarLinkCom :isMain="true" class="navLink" v-for="NavLink in NavLinks" :link="NavLink.link" :title="NavLink.title"></ElementsNavbarLinkCom>
                    </div>
                </div>
                <div class="headerElement">
                    <div class="icons">
                        <ElementsNavbarLinkCom class="iconLink" v-for="NavIcon in NavIcons" :link="NavIcon.link" :isIcon="true" :icon="NavIcon.icon"></ElementsNavbarLinkCom>
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
        <div>
            <slot></slot>
        </div>
    </main>
</template>
<script setup>
	import { useStore } from '~/store/glStore'
    const currentNav = computed(()=> store.isnavDrop) 
    const currentProductCount = ref(0)
    const store = useStore() 
    const NavLinks = ref([
        {
            link:'#',
            title:'Biler'
        },
        {
            link:'#',
            title:'Energi'
        },
        {
            link:'#',
            title:'Opladning'
        },
        {
            link:'#',
            title:'Opdag'
        },
        {
            link:'#',
            title:'Webshop'
        },
    ])
    const NavIcons = ref([
        {
            link:'#',
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
watch(currentNav, async(newValue, oldValue)=>{
    if(newValue != oldValue){
        setProductCount()
    }
})
</script>
<style lang="scss" scoped>
@import"@/assets/scss/colors";
    header{
        display: grid;
        grid-template-columns:minmax(0, 1fr);
        grid-template-rows:100%;
        align-items: center;
        min-height:56px;
        height: fit-content;
        width:100%;
        max-width: 100%;
        background-color: transparent;
        min-width: 0;
        position: fixed;
        width: 100vw;
        .navShow{
            display: flex;
        }
        .navHide{
            display: none;
        }
        .headerElement{
            max-width: 100%;
            display: flex;
            &:nth-child(2){
                justify-content: center;
            }
            &:nth-child(3){
                justify-content: flex-end;
            }
        }
    }
    .navBar{
        display: flex;
        width: 460px;
        .navLink{
            padding: 8px;

        }
    }
    .icons{
        display: flex;
        gap: 1rem;
    }
    .navDropdown{
        grid-column: span 1;
        max-width: 100%;
        padding-top: 3rem;
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
        .navDropdown{
            .imageLinks{
                grid-template-columns:repeat(3, 12fr);
            }
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
            .headerElement{
                max-width: fit-content;
            }
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