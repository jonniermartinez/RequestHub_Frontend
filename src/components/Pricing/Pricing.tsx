import { Button } from "../ui/button";
import './Pricing.css';
import { Badge } from "@/components/ui/badge";
import { Nav } from "@/components";

interface ItemsProps {
  title: string,
  plan: string,
  description: string,
  price: string,
  paymentLink?: string
  features?: [string];
}
export const PricingItem = ({ title, plan, description, price }: ItemsProps) => {
  return (
    <div className="tabla bg-white">
      <div className="titulocontainer">
        <p className="titulo">{title}</p>
        <Badge variant="default" className="bg-emerald-500">{plan}</Badge>
      </div>
      <p className="introduccion">{description}</p>
      <p className="precio">${price}</p>

      <Button>Get started</Button>

      <div className="div1">
        <p>
          ✔ no daily usage limit
        </p>

        <p>
          ✔ Unlimited Node creations
        </p>
        <p>
          ✔ Unlimited Node creations
        </p><p>
          ✔ Unlimited Node creations
        </p><p>
          ✔ Unlimited Node creations
        </p><p>
          ✔ Unlimited Node creations
        </p>


      </div>
    </div>
  )
}

function Pricing() {
  return (
    <>
    <Nav></Nav>
      <div className="contenedor relative pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div className="flex gap-4 absolute z-30 ">
          <PricingItem title="Twon +" plan="Plan Plus+" description="A plan that will allow you to create more drafts without any daily blocking." price="3.99"></PricingItem>
          <PricingItem title="Twon Pro" plan="Plan Plus+" description="A plan that will allow you to create more drafts without any daily blocking." price="7.99"></PricingItem>
        </div>
      </div>
    </>


  )

}

export default Pricing