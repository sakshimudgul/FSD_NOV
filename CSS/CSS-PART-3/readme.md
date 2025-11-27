##### CSS UNITS #########
 <!-- font-size: 16px;  -- Default; 
 font-size:1rem; ---1rem = 16px 
 font-size:1em;   -----1em = 16px 
 font-size: 1in;    ----1in = 96px 
 1in = 2.54cm; 
  font-size: 2.54cm; 

 font-size: 12pt;
    border: 12pt solid red; 
 1px == 0.75pt
    16px == `16*0.75 == (12) -->

Relative units 
  ##### 1.Understanding % in css ############
 % is respect to parent here 10 so 200 % of 10 p will be 20px 

 
  % are mostly used to give width and margin
 

   #### 2. Understanding Rem unit in css ########

   /* % is respect to parent here 10 so 200 % of 10 p will be 20px */

 
  % are mostly used to give width and margin
 

   ### 2. Understanding em unit in css ######
  html : root
    font-size = 10px i.e 62.5%
    font size = 2.8 rem
    i.e 2.8 x 10 = 28px

    paadding 1 em = respective to font size
    so 1em  = 28px ass fontsize is 28pxin h1 child
    |    |    | html : root --->size is 10px 
    but in case of em we consider element fontsize
    of child and not root i.e 28px ---> 10px


#### vw , vh ####
    <!-- vw is respective of child only 
doesnot cares about parent  -->

  vh , vw
 to check minimum and and take its 100 percent 