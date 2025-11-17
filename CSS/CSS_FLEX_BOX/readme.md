############## Flex box #################

<--------------------- flexbox_intro : ------------------------------>
 ## Flexbox (Flexible Box Layout) is a powerful CSS layout model designed to distribute space and align items efficiently within a container—even when their sizes are dynamic or unknown. ###

1.Flexbox_align_self :-
The align-self property in CSS allows individual flex or grid items to override the container’s alignment settings.


flex-start : Align item to the start of cross axis
flex-end : Align item to the end of cross axis
center : centers the item along the cross axis
baseline : align items baseline with others
stretch : stretches the item to fill the container
/* 
<-------- Example --------->
.item {
  align-self: center; 
}
*/

2.Flexbox_aligncontent :-
The align-content property in Flexbox controls how multiple lines of flex items are spaced along the cross axis (usually vertical). It only applies when flex-wrap is set to wrap or wrap-reverse.


flex-start : packs line to the start of the cross axis
flex-end : packs lines to the end of the cross axis
center : center line in the comtainer
space-between : evenly distributes lines
space-around : even spacing around each line
space-evenly :  equal spacing between all lines,including edges
stretch : stretches lines to fill the container

<-------- Example --------->
.container {
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}

3.flexbox-alignitems :-
The align-items property in Flexbox aligns flex items along the cross axis (usually vertical) within a single line. It affects how items are positioned relative to each other inside the flex container

flex-start : items align to the start of the cross axis
flex-end : align item to the end of the cross axis
center : items are centerd to the cross axis
baseline : items are align based on their text baseline
stretch : Default - items stretch to fill the container cross axis

<-------- Example --------->
.container {
  display: flex;
  align-items: center; 
}

4.Flexbox-direction : 
The flex-direction property in CSS defines the main axis of a flex container, determining how flex items are laid out—either horizontally or vertically.

row : default - items are laid out horizontally from left ot right
row-reverse : items are laid out horizontally from right to left
column : items are laid out vertically from top to buttom
column-reverse : items are laid out vertically from  buttom to top


<-------- Example --------->
.container {
  display: flex;
  flex-direction: row; /* Default */
}

5. flexbox_flex_basis :
The flex-basis property in Flexbox sets the initial size of a flex item along the main axis before any space is distributed.

auto : uses the item content size or width / height if set
0 : start with zero size ; items only grow if flex-grow is set
px,% : sets a fixed or relative size(e.g : 100px, 50%)

<-------- Example --------->
.item {
  flex-basis: 200px; 
}

6.flexbox_flexgrow :
The flex-grow property in CSS Flexbox defines how much a flex item should grow relative to the rest of the items when extra space is available in the container.

0 : Default . item will not grow beyound its original size
1 : item will grow to fill avalible space equally with other items
>1 : items will grow propoetionally more than others with lower values


<-------- Example --------->
.item {
  flex-grow: 2; 
}

7.Flexbox_flexshrink_flex  :
The flex-shrink property in Flexbox defines how much a flex item should shrink relative to others when there’s not enough space. The flex shorthand combines flex-grow, flex-shrink, and flex-basis into one line for convenience

<-------- Example --------->
.item {
  flex: 1 2 150px;
}

This means:
- Start at 150px (flex-basis)
- Grow equally (flex-grow: 1)
- Shrink twice as fast as default (flex-shrink: 2)

8.flexbox_justifycontent :
The justify-content property in Flexbox controls how flex items are aligned along the main axis (horizontal by default). It distributes extra space between and around items inside a flex container

flex-start : items align to the start of main axis
flex-end : items align to the end of main axis
center : items are centered along the main axis
space-between : items are evenly distributed 
space-around : items are equally space around them
space-evenly : items have equal space between and around them

<-------- Example --------->
.container {
  display: flex;
  justify-content: center; 
}

9. flexbox_order :
The order property in Flexbox lets you change the visual order of flex items without altering the HTML structure. Lower values appear first, higher values later

order:1 -->2nd
order:0 -->1st
order:2 -->3rd

<-------- Example --------->
.item {
  order: 2; 
}

9.flexbox_wrap :
The  property in Flexbox controls whether flex items stay on a single line or wrap onto multiple lines when they overflow the container.

nowrap : default . all items stay on one line
wrap : items wrap into multiple lines from top to buttom
wrap-reverse : items are wrap into multiple lines from button to top
<-------- Example --------->
.container {
  display: flex;
  flex-wrap: wrap; /* or nowrap | wrap-reverse */
}













