import ComponentSidebar from "../../components/component-sidebar"

interface PageProps {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <div className="flex w-full h-full">
      <ComponentSidebar />
      <div className="flex flex-col flex-1 h-full overflow-y-auto bg-gray-100">
        {children}
      </div>
    </div>
  )
}
