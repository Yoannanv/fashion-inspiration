import Header from '.component/header/Header';
import MainNav from './components/mainNav/MainNav';

function App() {
  return (
    <>
 
  {/*
Template Name: Interlingua
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Author URI: http://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: http://www.os-templates.com/template-terms
*/}
  <title>Interlingua</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  />
  <link
    href="layout/styles/layout.css"
    rel="stylesheet"
    type="text/css"
    media="all"
  />
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row0">
    <div id="topbar" className="hoc clear">
      {/* ################################################################################################ */}
      <div className="fl_left">
        <ul>
          <li>
            <i className="fa fa-phone" /> +00 (123) 456 7890
          </li>
          <li>
            <i className="fa fa-envelope-o" /> info@domain.com
          </li>
        </ul>
      </div>
      <div className="fl_right">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-lg fa-home" />
            </a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </div>
      {/* ################################################################################################ */}
    </div>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row1">
    <header id="header" className="hoc clear">
      {/* ################################################################################################ */}
      <div id="logo" className="fl_left">
        <h1>
          <a href="index.html">Interlingua</a>
        </h1>
        <p>Quisque congue diam</p>
      </div>
      <div id="quickinfo" className="fl_right">
        <ul className="nospace inline">
          <li>
            <strong>Praesent:</strong>
            <br />
            +00 (123) 456 7890
          </li>
          <li>
            <strong>Faucibus:</strong>
            <br />
            +00 (123) 456 7890
          </li>
        </ul>
      </div>
      {/* ################################################################################################ */}
    </header>
    <nav id="mainav" className="hoc clear">
      {/* ################################################################################################ */}
      <ul className="clear">
        <li className="active">
          <a href="index.html">Home</a>
        </li>
        <li>
          <a className="drop" href="#">
            Pages
          </a>
          <ul>
            <li>
              <a href="pages/gallery.html">Gallery</a>
            </li>
            <li>
              <a href="pages/full-width.html">Full Width</a>
            </li>
            <li>
              <a href="pages/sidebar-left.html">Sidebar Left</a>
            </li>
            <li>
              <a href="pages/sidebar-right.html">Sidebar Right</a>
            </li>
            <li>
              <a href="pages/basic-grid.html">Basic Grid</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="drop" href="#">
            Dropdown
          </a>
          <ul>
            <li>
              <a href="#">Level 2</a>
            </li>
            <li>
              <a className="drop" href="#">
                Level 2 + Drop
              </a>
              <ul>
                <li>
                  <a href="#">Level 3</a>
                </li>
                <li>
                  <a href="#">Level 3</a>
                </li>
                <li>
                  <a href="#">Level 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Level 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Link Text</a>
        </li>
        <li>
          <a href="#">Link Text</a>
        </li>
        <li>
          <a href="#">Link Text</a>
        </li>
        <li>
          <a href="#">Long Link Text</a>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </nav>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div
    className="wrapper bgded overlay"
    style={{ backgroundImage: 'url("images/demo/backgrounds/01.png")' }}
  >
    <div id="pageintro" className="hoc clear">
      {/* ################################################################################################ */}
      <article>
        <p>Pulvinar arcu praesent</p>
        <h3 className="heading">Pharetra fusce volutpat</h3>
        <p>
          Diam libero interdum at fringilla id interdum eu ante in ornare nisi
          vitae massa etiam eget lacus sit amet eros tempus elementum phasellus
          nisi dui condimentum vel imperdiet et adipiscing vitae ut tellus sit
          amet erat elementum.
        </p>
        <footer>
          <ul className="nospace inline pushright">
            <li>
              <a className="btn" href="#">
                Aenean venenatis
              </a>
            </li>
            <li>
              <a className="btn inverse" href="#">
                Tincidunt mauris
              </a>
            </li>
          </ul>
        </footer>
      </article>
      {/* ################################################################################################ */}
    </div>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row3">
    <main className="hoc container clear">
      {/* main body */}
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <h6 className="heading">Imperdiet vivamus</h6>
        <p>Scelerisque arcu et interdum vulputate purus nisl.</p>
      </div>
      <div className="group">
        <div className="one_half first">
          <p>
            Fringilla sapien quis sollicitudin dui mauris et dui sed eget lectus
            vitae augue feugiat elementum sed luctus.
          </p>
          <p className="btmspace-50">
            Integer sodales odio a ultrices feugiat ligula augue tempor orci
            ullamcorper mattis erat pede at magna aliquam nisl etiam congue
            quisque vel ante quis massa tristique.
          </p>
          <ul className="nospace group">
            <li className="one_half first">
              <article>
                <a href="#">
                  <i className="icon btmspace-30 fa fa-joomla" />
                </a>
                <h6 className="heading font-x1">Iaculis nam nulla</h6>
                <p>
                  Lacinia quis ornare a eros aliquam leo curabitur pretium enim
                  et mauris duis elit…
                </p>
              </article>
            </li>
            <li className="one_half">
              <article>
                <a href="#">
                  <i className="icon btmspace-30 fa fa-institution" />
                </a>
                <h6 className="heading font-x1">Augue faucibus nec</h6>
                <p>
                  Fusce malesuada neque non odio class aptent taciti sociosqu ad
                  litora torquent per…
                </p>
              </article>
            </li>
          </ul>
        </div>
        <div className="one_half">
          <img
            className="inspace-10 borderedbox"
            src="images/demo/480x400.png"
            alt=""
          />
        </div>
      </div>
      {/* ################################################################################################ */}
      {/* / main body */}
      <div className="clear" />
    </main>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div
    className="wrapper bgded overlay"
    style={{ backgroundImage: 'url("images/demo/backgrounds/02.png")' }}
  >
    <section className="hoc container clear">
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <h6 className="heading">Conubia nostra per</h6>
        <p>Inceptos himenaeos curabitur in ipsum nec justo.</p>
      </div>
      <ul className="nospace group center">
        <li className="one_quarter first">
          <article>
            <a href="#">
              <i className="icon btmspace-30 fa fa-ioxhost" />
            </a>
            <h6 className="heading font-x1">Elementum facilisis</h6>
            <p>
              Est pellentesque tempus sodales justo lectus faucibus neque a
              mollis augue arcu…
            </p>
          </article>
        </li>
        <li className="one_quarter">
          <article>
            <a href="#">
              <i className="icon btmspace-30 fa fa-yelp" />
            </a>
            <h6 className="heading font-x1">Suspendisse potenti</h6>
            <p>
              Fusce consequat ipsum non ipsum aliquam iaculis odio non bibendum
              bibendum erat…
            </p>
          </article>
        </li>
        <li className="one_quarter">
          <article>
            <a href="#">
              <i className="icon btmspace-30 fa fa-google-wallet" />
            </a>
            <h6 className="heading font-x1">Donec sagittis purus</h6>
            <p>
              Dolor ut dignissim ipsum nisl sit amet metus nam dui dui rhoncus
              tempus aliquam…
            </p>
          </article>
        </li>
        <li className="one_quarter">
          <article>
            <a href="#">
              <i className="icon btmspace-30 fa fa-ils" />
            </a>
            <h6 className="heading font-x1">Ullamcorper odio sed</h6>
            <p>
              Rutrum vel tellus donec tortor lectus varius vel egestas a dictum
              in odio sed…
            </p>
          </article>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </section>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row3">
    <section className="hoc container clear">
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <h6 className="heading">Nec tincidunt aliquet</h6>
        <p>Ipsum mi ultrices magna eu tempor quam dolor.</p>
      </div>
      <ul className="nospace group services">
        <li className="one_quarter first">
          <article className="inverse">
            <a href="#">
              <i className="fa fa-3x fa-houzz" />
            </a>
            <h6 className="heading font-x1">
              <a href="#">Maecenas</a>
            </h6>
            <p>Felis quam eget dictum suscipit vivamus et nec metus maecenas</p>
          </article>
        </li>
        <li className="one_quarter">
          <article>
            <a href="#">
              <i className="fa fa-3x fa-weibo" />
            </a>
            <h6 className="heading font-x1">
              <a href="#">Dignissim</a>
            </h6>
            <p>
              Dapibus consectetuer mauris aliquam urna dolor semper volutpat
            </p>
          </article>
        </li>
        <li className="one_quarter">
          <article className="inverse">
            <a href="#">
              <i className="fa fa-3x fa-wheelchair-alt" />
            </a>
            <h6 className="heading font-x1">
              <a href="#">Vestibulum</a>
            </h6>
            <p>
              Id dictum vel est morbi lacinia sagittis mauris pellentesque id
              eros sit
            </p>
          </article>
        </li>
        <li className="one_quarter">
          <article>
            <a href="#">
              <i className="fa fa-3x fa-viacoin" />
            </a>
            <h6 className="heading font-x1">
              <a href="#">Bibendum</a>
            </h6>
            <p>
              Amet risus interdum ornare integer id justo ut diam suscipit
              laoreet
            </p>
          </article>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </section>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row2">
    <figure className="hoc container clear">
      {/* ################################################################################################ */}
      <figcaption className="sectiontitle">
        <h6 className="heading">Dictum in non ligula</h6>
        <p>Non lectus laoreet accumsan mauris placerat magna.</p>
      </figcaption>
      <ul className="nospace group">
        <li className="one_quarter first">
          <a href="#">
            <img src="images/demo/222x138.png" alt="" />
          </a>
        </li>
        <li className="one_quarter">
          <a href="#">
            <img src="images/demo/222x138.png" alt="" />
          </a>
        </li>
        <li className="one_quarter">
          <a href="#">
            <img src="images/demo/222x138.png" alt="" />
          </a>
        </li>
        <li className="one_quarter">
          <a href="#">
            <img src="images/demo/222x138.png" alt="" />
          </a>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </figure>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div
    className="wrapper row4 bgded overlay"
    style={{ backgroundImage: 'url("images/demo/backgrounds/03.png")' }}
  >
    <footer id="footer" className="hoc clear">
      {/* ################################################################################################ */}
      <div className="one_third first">
        <h6 className="heading">Facilisis neque vestibulum</h6>
        <ul className="nospace btmspace-30 linklist contact">
          <li>
            <i className="fa fa-map-marker" />
            <address>Street Name &amp; Number, Town, Postcode/Zip</address>
          </li>
          <li>
            <i className="fa fa-phone" /> +00 (123) 456 7890
          </li>
          <li>
            <i className="fa fa-fax" /> +00 (123) 456 7890
          </li>
          <li>
            <i className="fa fa-envelope-o" /> info@domain.com
          </li>
        </ul>
      </div>
      <div className="one_third">
        <h6 className="heading">Auctor egestas quisque</h6>
        <p className="nospace btmspace-30">
          Ut ipsum quisque luctus aliquam accumsan sapien quis magna etiam quis.
        </p>
        <form method="post" action="#">
          <fieldset>
            <legend>Newsletter:</legend>
            <input
              className="btmspace-15"
              type="text"
              defaultValue=""
              placeholder="Name"
            />
            <input
              className="btmspace-15"
              type="text"
              defaultValue=""
              placeholder="Email"
            />
            <button type="submit" value="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div className="one_third">
        <h6 className="heading">Tempor orci vestibulum</h6>
        <figure>
          <a href="#">
            <img
              className="borderedbox inspace-10 btmspace-15"
              src="images/demo/320x168.png"
              alt=""
            />
          </a>
          <figcaption>
            <h6 className="nospace font-x1">
              <a href="#">Neque convallis pretium</a>
            </h6>
            <time className="font-xs block btmspace-10" dateTime="2045-04-06">
              Friday, 6<sup>th</sup> April 2045
            </time>
          </figcaption>
        </figure>
      </div>
      {/* ################################################################################################ */}
    </footer>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row5">
    <div id="copyright" className="hoc clear">
      {/* ################################################################################################ */}
      <p className="fl_left">
        Copyright © 2016 - All Rights Reserved - <a href="#">Domain Name</a>
      </p>
      <p className="fl_right">
        Template by{" "}
        <a
          target="_blank"
          href="http://www.os-templates.com/"
          title="Free Website Templates"
        >
          OS Templates
        </a>
      </p>
      {/* ################################################################################################ */}
    </div>
  </div>
</>


  )
}

export default App
