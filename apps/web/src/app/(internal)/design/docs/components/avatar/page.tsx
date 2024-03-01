import { DesignComponentHeader } from "../component-header"
import { Column } from "@/ui/layout/flex"
import { Avatar } from "@/ui/components/avatar"
import { ComponentPropsGrid } from "../component-props-grid"
import { Label, Paragraph } from "@/ui/components/typography"

export default function AvatarPage() {
  return (
    <>
      <DesignComponentHeader
        title="Avatar"
        description="The avatar component is used to display a user's profile picture or initials. It is often used in lists, comments, and other places where a user's identity is important."
      />

      <Paragraph className="mt-2">
        The order of precedence for the avatar is imageSrc, initials, icon. If
        you only set one, it will be the one used.
      </Paragraph>

      <Column gap={4} className="mt-8">
        <Label>Initials</Label>
        <Avatar initials="MS" />
        <Label>Image</Label>
        <Avatar imageSrc="https://pub-static.fotor.com/assets/projects/pages/38c083f668064d1a97402666b6777ad8/fotor-c9bee87283af45bdb0b18378e9d46b1d.jpg" />
        <Label>Icon</Label>
        <Avatar icon="alienShip" />
        <ComponentPropsGrid
          params={[
            {
              name: "initials",
              type: "string",
              optional: true,
              description:
                "The initials to display in the avatar, max 3 characters",
            },
            {
              name: "imageSrc",
              type: "string",
              optional: true,
              description: "The image src url to display in the avatar",
            },
            {
              name: "icon",
              type: "string",
              optional: true,
              description: "The icon name to display in the avatar",
            },
          ]}
        />
      </Column>
    </>
  )
}
