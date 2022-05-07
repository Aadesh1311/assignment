const navbar=()=>{
    return(
        `<div class="none"></div>
        <div class="explore">
            <div class="exploresearch">
                <div class="ex"><img class="menu" src="./images/menu-bars-2.png"/>
                    <p style ="margin:-22px 0px 0px 24px ;padding:0px 0px 0px 0px"><strong>Explore</strong></p></div>
                <div class="se"><img class="search" src="./images/Screenshot_2.png"/></div>
            </div>
            <div class="date" >
                <p id="date" style="font-size:12px;"></p>
            </div>
        </div>
        <div class="logo">
            <img class="img"  src="./images/Screenshot_1.png"/>
        </div>
        <div class="games">
            <img style="padding: 17px 0px 0px 0px;"  src="./images/Screenshot_3.png"/>
            <img onclick="signin()" style="width:25%;padding: 17px 0px 0px 0px;"  src="./images/Screenshot_5.png"/>
            <img style="width:80%;padding: 0px 0px 0px 0px;"  src="./images/Screenshot_4.png"/>
        </div>
        <div id="none"></div>`);
    
};
 export default navbar;
 