export default function Header(){
return(
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
);

};

