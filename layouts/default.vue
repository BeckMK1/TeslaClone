<template>
    <div>
        <header>
                <div class="headerElement">
                    <div><NuxtLink class="logo" to="#">Car</NuxtLink></div>
                </div>
                <div class="headerElement">
                    <div class="navBar">
                    <ElementsNavbarLinkCom class="navLink" v-for="NavLink in NavLinks" :link="NavLink.link" :title="NavLink.title"></ElementsNavbarLinkCom>
                    </div>
                </div>
                <div class="headerElement">
                    <div class="icons">
                        <ElementsNavbarLinkCom class="iconLink" v-for="NavIcon in NavIcons" :link="NavIcon.link" :isIcon="true" :icon="NavIcon.icon"></ElementsNavbarLinkCom>
                    </div>
                </div>
                <div class="navDropdown" v-if="currentNav != ''">
                <div class="dropDownContainer">
                    <div class="imageLinks"  v-for="DropDownLink in DropDownLinks" v-show="currentNav == DropDownLink.type">
                        <ElementsNavbarDropdownCom :imageLinks="DropDownLink.imageLinks" :textLinks="DropDownLink.textLinks"></ElementsNavbarDropdownCom>
                    </div>
                    <div class="devider"></div>
                    <div class="textLinks" v-for="DropDownLink in DropDownLinks" v-show="currentNav == DropDownLink.type">
                        <ElementsNavbarLinkCom v-for="textLink in DropDownLink.textLinks" :link="textLink.link" :title="textLink.title"></ElementsNavbarLinkCom>
                    </div>
                </div>
            </div>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
    const currentNav = ref("bilder")
    const NavLinks = ref([
        {
            link:'#',
            title:'Bilder'
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
            type:'bilder',
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
    ])
</script>
<style lang="scss" scoped>
@import"@/assets/scss/colors";
    header{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows:56px 100%;
        align-items: center;
        min-height:56px;
        width:calc(100% - 64px) ;
        padding-left: 32px;
        padding-right: 32px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: transparent;

        .headerElement{
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

    }
    .navDropdown{
        padding-top: 4rem;
        grid-column: span 3;
        padding-left: 4rem;
        padding-right: 4rem;
        .dropDownContainer{
            display: grid;
            grid-template-columns: repeat(12,1fr);
            .textLinks{
                grid-column: 10/12;
            }
            .imageLinks{
                display: grid;
                grid-template-columns: repeat(4,1fr);
                grid-column: 2/9;
                gap:16px;
            }
            .devider{
                grid-column: 9/10;
                height: 100%;
                width: 1px;
                justify-self: center;
                background-color: $lightGray;
            }
        }
    }
</style>