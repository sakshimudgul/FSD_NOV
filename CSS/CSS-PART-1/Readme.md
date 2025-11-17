<------------------------------ >styling ways in css --------------------------------->

1.font : 
we can use google font
<!-- body{
    font-family: "Oswald", sans-serif;
} -->

2. colors :
we can give colors in three ways
<!-- p{
     color:crimson; ##normal 
    color:#0000ff;  #hexadecimal
    color:rgb(82, 190, 82) ##rgb form
} -->

3.selectors : 
<div id="main-heading">
        <h2 class="bg-dark">Main Heading</h2>
        in this way we can use id and class selector in html
 <!-- id selector -- # tag  -->
 #main-heading{
    color:crimson;
    background-color:bisque;
}

<!-- class selector  -- . tag  -->
.main-section{
    color:rgb(114, 36, 114);
    background-color:rgb(236, 216, 135);
}        

<!-- Developers
id vs class
id--less used--Dont use same id twice on one page.
class--more used-- classes can be used multiple times.

web theme:
utility classes(pre-made classes for multi use)  -->
 
 4.universal selector
 <!-- universal selector '*'  -->
*{
    color:plum;
}

<!--  // it all changes h2 inside the section  -->

 
 section.my-articles  h2{
    font-family:'sans-serif';
    color:green;
} 

<!--  changes direct child  -->
section.my-articles > h2{
    font-family:'sans-serif';
    color:green;
}

<!--  changes paragraph directly after h2 anywhere  -->
/* h2+p{
    color:orangered;
}  */

<!-- changes paragraph after ul anywhere -->
ul+p{
    color:darkmagenta;
}

 <!-- changes paragraph directly h2 where section is my-articles  -->
section.my-articles h2+p{
color:orangered;
}

5.attribute selector

 <!-- Universal Selector 
 used for Particular word -->

a[href *="google"]{ 
     color: red;
}

<!-- caret Symbol  -->
/* a[href ^="https"]{ 
    color: green;
} */

6.specificity
**specificity**

More specific :

<!-- inline style selector > id selector > class selector > element selector -->

6.border
is used to give border
h1{
    /* short hand way */
    border-bottom:4px solid red;
    border-top:4px solid red;
    border-radius:10px;

    /* border-width:4px;
    border-style:solid;
    border-color:red; */
}
##### css boxmodel ##############

- Content
The innermost area where text, images, or other content appears.
 Controlled by width and height.
- Padding
 Space between the content and the border.
 Transparent area that expands the box without affecting layout spacing.
 Controlled by padding, padding-top, padding-right, etc.
- Border
 Surrounds the padding (if any) and content.
Controlled by border, border-width, border-style, and border-color.
- Margin
 Outermost layer that creates space between the element and its neighbors.
 Controlled by margin, margin-top, margin-right, etc.
 <!-- h1{
    border:2px solid red;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left:200px;
    margin-right: 200px;
    margin-top: 50px;
    text-align: center;
    font-family:Arial, sans-serif;
} -->

#### Margin collapsing #################
 <!-- Margin collapsing  -->
.box1{
    margin-bottom: 40px;

}

.box2{
    margin-top: 50px;

}

<!-- its not 40 bottom of box1 + 50 top of box2 = 90 
margin between box1 and box2

Here the greater margin is considered and it is collapsed
So margin between box1 and box 2
greater i.e 50 px is considered  -->

##### inline vs blocklevel ###############3
<!-- 
 Inline Element take Margin only left and right 
     Observation : Change Only in Margin-left-right  .
     No Change in Margin top-bottom (it shows but No Changes). -->

      <!-- block element take all margin 
observation: changes all sides. -->
