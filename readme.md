# SectionScroller.js 
Ett njas script som markerar den aktuella `<li>` i takt med att man scrollar förbi sektioner.

````html
<ul class="js-sectionscroller-navigation">
    <li class="current"><a href="#sektion_1">Sektion 1</a></li>
    <li><a href="#sektion_2">Sektion 2</a></li>
</ul>

<div id="sektion_1" class="js-hitstop-target"></div>
<section>
    <h3>Sektion 1</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio esse unde quibusdam tempora vero repudiandae perferendis dicta similique pariatur, cupiditate cum, ex eaque ipsa laudantium. Numquam eveniet unde, illum ut?</p>
</section>

<div id="sektion_2" class="js-hitstop-target"></div>
<section>
    <h3>Sektion 2</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio esse unde quibusdam tempora vero repudiandae perferendis dicta similique pariatur, cupiditate cum, ex eaque ipsa laudantium. Numquam eveniet unde, illum ut?</p>
</section>
````

````javascript
(function() {
    var sectionScroller = new SectionScroller('.js-sectionscroller-navigation');
})();
````