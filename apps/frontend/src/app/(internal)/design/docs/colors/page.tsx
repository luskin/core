import { Column, Row } from "@/ui/layout/flex"

function ColorShade({ className }: { className: string }) {
  return <div className={`${className} h-4 w-8 rounded`} />
}

function Label({ label, long }: { label: string; long?: boolean }) {
  return (
    <div
      className={`text-xs h-4 ${long ? "w-20" : "w-8"} flex ${
        long ? "justify-end" : "justify-center"
      } items-center`}
    >
      {label}
    </div>
  )
}

export default function Page() {
  return (
    <Column gap={2}>
      <Row gap={1}>
        <Label label="" long />
        <Label label="1" />
        <Label label="2" />
        <Label label="3" />
        <Label label="4" />
        <Label label="5" />
        <Label label="6" />
        <Label label="7" />
        <Label label="8" />
        <Label label="9" />
        <Label label="10" />
        <Label label="11" />
        <Label label="12" />
      </Row>

      <Row gap={1}>
        <Label label="Slate" long />
        <ColorShade className="bg-slate-1" />
        <ColorShade className="bg-slate-2" />
        <ColorShade className="bg-slate-3" />
        <ColorShade className="bg-slate-4" />
        <ColorShade className="bg-slate-5" />
        <ColorShade className="bg-slate-6" />
        <ColorShade className="bg-slate-7" />
        <ColorShade className="bg-slate-8" />
        <ColorShade className="bg-slate-9" />
        <ColorShade className="bg-slate-10" />
        <ColorShade className="bg-slate-11" />
        <ColorShade className="bg-slate-12" />
      </Row>

      <Row gap={1}>
        <Label label="Accent" long />
        <ColorShade className="bg-accent-1" />
        <ColorShade className="bg-accent-2" />
        <ColorShade className="bg-accent-3" />
        <ColorShade className="bg-accent-4" />
        <ColorShade className="bg-accent-5" />
        <ColorShade className="bg-accent-6" />
        <ColorShade className="bg-accent-7" />
        <ColorShade className="bg-accent-8" />
        <ColorShade className="bg-accent-9" />
        <ColorShade className="bg-accent-10" />
        <ColorShade className="bg-accent-11" />
        <ColorShade className="bg-accent-12" />
      </Row>

      <Row gap={1}>
        <Label label="Success" long />
        <ColorShade className="bg-success-1" />
        <ColorShade className="bg-success-2" />
        <ColorShade className="bg-success-3" />
        <ColorShade className="bg-success-4" />
        <ColorShade className="bg-success-5" />
        <ColorShade className="bg-success-6" />
        <ColorShade className="bg-success-7" />
        <ColorShade className="bg-success-8" />
        <ColorShade className="bg-success-9" />
        <ColorShade className="bg-success-10" />
        <ColorShade className="bg-success-11" />
        <ColorShade className="bg-success-12" />
      </Row>

      <Row gap={1}>
        <Label label="Error" long />
        <ColorShade className="bg-error-1" />
        <ColorShade className="bg-error-2" />
        <ColorShade className="bg-error-3" />
        <ColorShade className="bg-error-4" />
        <ColorShade className="bg-error-5" />
        <ColorShade className="bg-error-6" />
        <ColorShade className="bg-error-7" />
        <ColorShade className="bg-error-8" />
        <ColorShade className="bg-error-9" />
        <ColorShade className="bg-error-10" />
        <ColorShade className="bg-error-11" />
        <ColorShade className="bg-error-12" />
      </Row>

      <Row gap={1}>
        <Label label="Warning" long />
        <ColorShade className="bg-warning-1" />
        <ColorShade className="bg-warning-2" />
        <ColorShade className="bg-warning-3" />
        <ColorShade className="bg-warning-4" />
        <ColorShade className="bg-warning-5" />
        <ColorShade className="bg-warning-6" />
        <ColorShade className="bg-warning-7" />
        <ColorShade className="bg-warning-8" />
        <ColorShade className="bg-warning-9" />
        <ColorShade className="bg-warning-10" />
        <ColorShade className="bg-warning-11" />
        <ColorShade className="bg-warning-12" />
      </Row>

      <Row gap={1}>
        <Label label="Information" long />
        <ColorShade className="bg-information-1" />
        <ColorShade className="bg-information-2" />
        <ColorShade className="bg-information-3" />
        <ColorShade className="bg-information-4" />
        <ColorShade className="bg-information-5" />
        <ColorShade className="bg-information-6" />
        <ColorShade className="bg-information-7" />
        <ColorShade className="bg-information-8" />
        <ColorShade className="bg-information-9" />
        <ColorShade className="bg-information-10" />
        <ColorShade className="bg-information-11" />
        <ColorShade className="bg-information-12" />
      </Row>

      <Row gap={1}>
        <Label label="Update" long />
        <ColorShade className="bg-update-1" />
        <ColorShade className="bg-update-2" />
        <ColorShade className="bg-update-3" />
        <ColorShade className="bg-update-4" />
        <ColorShade className="bg-update-5" />
        <ColorShade className="bg-update-6" />
        <ColorShade className="bg-update-7" />
        <ColorShade className="bg-update-8" />
        <ColorShade className="bg-update-9" />
        <ColorShade className="bg-update-10" />
        <ColorShade className="bg-update-11" />
        <ColorShade className="bg-update-12" />
      </Row>
    </Column>
  )
}
