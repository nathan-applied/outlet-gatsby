import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer  className="container-fluid footer-html">  
  <div  className="row top-padding bottom-padding">
    <div  className="text-center">
      <div >Copyright © 2021 Rooms To Go. All Rights Reserved.</div>
      <div >
        <a  className="terms" href="https://legal.roomstogo.com/rtg-online#contract-fxauo3tp2" target="_blank">Privacy Notice</a> | 
        <a  className="terms" href="https://legal.roomstogo.com/rtg-online#contract-7siltltgm" target="_blank">Terms Of Use</a> | 
        <a  className="terms" href="https://legal.roomstogo.com/rtg-online#outlet-tos" target="_blank">Outlet Terms Of Sale</a> |
        <a  className="terms" href="https://legal.roomstogo.com/rtg-online#outlet-tos-spa" target="_blank">Términos de venta de Outlet</a>
      </div>
    </div>
  </div>

  <div  className="row bottom-padding">
    <div  className="">
      <div  className="container-fluid outlet-stores-html">
  <div  className="row">
    <div  className="">
      <div  className="row">
        <div  className="">
          <h4  className="title">Our Outlets can be found in the following areas</h4>
        </div>
      </div>
      <div  className="row">
        <div  className="state-pane">
          <div  className="state-col">
            <span  className="state">Florida</span>
            <ul >
              <li >
                <a  href="/stores/clearwater/904">Clearwater</a>
              </li><li >
                <a  href="/stores/hialeah/905">Hialeah</a>
              </li><li >
                <a  href="/stores/oaklandpark/931">Oakland Park</a>
              </li><li >
                <a  href="/stores/orangepark/921">Orange Park</a>
              </li><li >
                <a  href="/stores/orlando/903">Orlando</a>
              </li><li >
                <a  href="/stores/pompanobeach/906">Pompano Beach</a>
              </li><li >
                <a  href="/stores/seffner/901">Seffner</a>
              </li>
            </ul>
          </div><div  className="state-col">
            <span  className="state">Georgia</span>
            <ul >
              <li >
                <a  href="/stores/columbus/1074">Columbus</a>
              </li><li >
                <a  href="/stores/forestpark/1071">Forest Park</a>
              </li><li >
                <a  href="/stores/norcross/1095">Norcross</a>
              </li>
            </ul>
          </div><div  className="state-col">
            <span  className="state">Louisiana</span>
            <ul >
              <li >
                <a  href="/stores/gretna/925">Gretna</a>
              </li><li >
                <a  href="/stores/pearlriver/926">Pearl River</a>
              </li>
            </ul>
          </div><div  className="state-col">
            <span  className="state">North Carolina</span>
            <ul >
              <li >
                <a  href="/stores/charlotte/1061">Charlotte</a>
              </li><li >
                <a  href="/stores/dunn/1063">Dunn</a>
              </li>
            </ul>
          </div><div  className="state-col">
            <span  className="state">Tennessee</span>
            <ul >
              <li >
                <a  href="/stores/lebanon/1011">Lebanon</a>
              </li>
            </ul>
          </div><div  className="state-col">
            <span  className="state">Texas</span>
            <ul >
              <li >
                <a  href="/stores/brookshire/2905">Brookshire</a>
              </li><li >
                <a  href="/stores/fortworth/2908">Fort Worth</a>
              </li><li >
                <a  href="/stores/grandprairie/2901">Grand Prairie</a>
              </li><li >
                <a  href="/stores/houston/2904">Houston</a>
              </li><li >
                <a  href="/stores/humble/2909">Humble</a>
              </li>
            </ul>
          </div><div  className="state-col">
            <span  className="state">Puerto Rico</span>
            <ul >
              <li >
                <a  href="/stores/aguadillapueblo/3094">Aguadilla Pueblo</a>
              </li><li >
                <a  href="/stores/arecibo/3903">Arecibo</a>
              </li><li >
                <a  href="/stores/caguas/3095">Caguas</a>
              </li><li >
                <a  href="/stores/carolina/3098">Carolina</a>
              </li><li >
                <a  href="/stores/fajardo/3904">Fajardo</a>
              </li><li >
                <a  href="/stores/humacao/3902">Humacao</a>
              </li><li >
                <a  href="/stores/manati/3096">Manati</a>
              </li><li >
                <a  href="/stores/toabaja/3092">Toa Baja</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

    </div>
  </div>
</footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
