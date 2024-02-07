import { Nav, NavItem } from "@/components/primitives/nav"

export function SideNav() {
  return (
    <Nav>
      <NavItem icon="trucks" label="Quote" href="/" />
      <NavItem icon="locationArrow" label="Track" href="/track" />
      <NavItem icon="claimsShield" label="Claims" href="/claims" />
      <NavItem icon="alienShip" label="Reporting" href="/reporting" />
      <NavItem icon="paymentCard" label="Billing" href="/billing" />
    </Nav>
  )
}
