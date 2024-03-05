"use client"
import { TabProps, Tabs } from "@/ui/components/tabs"
import { WebUserMode } from "@shared/types"
import { useRouter } from "next/navigation"
import { setUserMode } from "./web-user-mode-tabs.actions"

interface WebUserModeAdminActionProps {
  userMode: WebUserMode
}

export function WebUserModeAdminAction(props: WebUserModeAdminActionProps) {
  const { userMode } = props
  const router = useRouter()

  const tabs: Array<TabProps<WebUserMode>> = [
    {
      label: "Shipper",
      value: WebUserMode.Shipper,
    },
    {
      label: "Admin",
      value: WebUserMode.Admin,
    },
  ]

  const onValueChange = async (value: string) => {
    await setUserMode(value as WebUserMode)
    router.refresh()
  }

  return <Tabs tabs={tabs} onValueChange={onValueChange} value={userMode} />
}
