import { Button } from "../ui/button";
import './Pricing.css';
import { Badge } from "@/components/ui/badge"

function Pricing() {
  return (
    <>
    <div className="contenedor">
    <div className="tabla">

      <div className="titulocontainer">
      <p className="titulo">Free</p>
      <Badge variant="default" className="bg-emerald-500">Your Plan</Badge>
      </div>
      
      

    <p className="introduccion">
      The essentials to star creating your own
      drafts.
    </p>
    <p className="precio">
      $0
    </p>

    <Button>Get started</Button>

    <div className="div1">
        <p>
        ✔ no daily usage limit
        </p>
    
        <p>
        ✔ Unlimited Node creations
        </p>
     
        
        </div>
      </div>

      <div className="tabla">
      <div className="titulocontainer">
      <p className="titulo">Twon+</p>
      <Badge variant="default" className="bg-emerald-500">Plan Plus+</Badge>
      </div>

    <p className="introduccion">
      A plan that will allow you to create more drafts
      without any daily blocking.
    </p>
    <p className="precio">
      $3.99
    </p>
    <Button className="boton">Upgrade</Button>
    <div className="div1">
        <p>
        ✔ no daily usage limit
        </p>
      
        <p>
        ✔ Unlimited Node creations
        </p>
     
        <p>
        ✔ Early access to new features
        </p>
    
        <p>
        ✔ Access to Pro features
        </p>
      
        </div>
      </div>

      <div className="tabla">
      <div className="titulocontainer">
      <p className="titulo">Twon Pro</p>
      <Badge variant="default" className="bg-yellow-500">Popular</Badge>
      </div>

    <p className="introduccion">
      A plan that gives yous all the freedom to use
      Twon without restrictions.
    </p>
    <p className="precio">
      $7.99
    </p>
    <Button className="boton">Upgrade</Button>
    <div className="div1">
        <p>
        ✔ no daily usage limit
        </p>
      
        <p>
        ✔ Unlimited Node creations
        </p>
     
        <p>
        ✔ Early access to new features
        </p>
    
        <p>
        ✔ Access to Pro features
        </p>
      
        <p>
        ✔ Unlimited Custom iterations
        </p>
        </div>
      </div>

    </div>

    

    </>
    
    
  )
  
}

export default Pricing