<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>SectionScroller.js</title>
        <style>
            a, a:visited {
                color: black;
            }
            ul {
                position: fixed;
                top: 0;
                right: 0;
                background: white;
                margin: 0;
                padding: 10px;
                text-align: right;
            }
            li {
                list-style-type: none;
            }
            li.current a {
                color: red;
            }
            section {
                margin-bottom: 1em;
                background: #eaeaea;
            }
            .inner {
                padding: 1em;
            }
        </style>
    </head>
    <body>

        <ul class="js-sectionscroller-navigation">
            <?php for ($i = 1; $i <= 10; $i++) : ?>
                <li <?php if ($i == 1) echo 'class="current"';?>>
                    <a href="#section_<?php echo $i;?>">Sektion <?php echo $i;?></a>
                </li>
            <?php endfor; ?>
        </ul>

        <?php for ($i = 1; $i <= 10; $i++) : ?>
            <div class="js-hitstop-trigger" id="section_<?php echo $i;?>" data-sectionscroller-settings='{"distanceFromTop": {"default": "50"}}'></div>
            <section>
                <div class="inner">
                    <h3>Section <?php echo $i;?></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsum debitis, consequuntur, et iste possimus veritatis sit facilis provident culpa facere maiores repellendus atque id! Accusantium, fugiat fugit temporibus dicta?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ipsum debitis, consequuntur, et iste possimus veritatis sit facilis provident culpa facere maiores repellendus atque id! Accusantium, fugiat fugit temporibus dicta?</p>
                </div>
            </section>
        <?php endfor; ?>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="./jquery.hitstop.js"></script>
        <script src="./Sectionscroller.js"></script>
        <script>
            (function () {
                var sectionScroller = new SectionScroller('ul.js-sectionscroller-navigation');
            })();
        </script>
    </body>
</html>