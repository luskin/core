import * as Icons from "@/ui/components/icon/svgs"
import { DesignComponentHeader } from "../component-header"
import { Icon, IconName } from "@/ui/components/icon"
import { Column } from "@/ui/layout/flex"
import { Paragraph } from "@/ui/components/typography"

export default function IconPage() {
  return (
    <>
      <DesignComponentHeader
        title="Icons"
        description="Explore our comprehensive library of icons. This collection provides a wide range of symbols to help you create intuitive and visually pleasing interfaces. Each icon is designed with simplicity and consistency in mind, ensuring they blend seamlessly with your design."
      />
      <div className="container grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
        {Object.keys(Icons).map((iconName) => {
          return (
            <Column align="center">
              <div className="w-16 h-16 rounded-lg shadow flex justify-center items-center hover:bg-slate-2 transition cursor-pointer">
                <Icon name={iconName as IconName} className="w-6 h-6" />
              </div>
              <Paragraph size="sm" className="mt-2 text-center">
                {iconName}
              </Paragraph>
            </Column>
          )
        })}
      </div>
    </>
  )
}
