import LabeldInput from "@/components/ui/Input"

const marketing = () => {
  return (
    <div className="px-5">
      <h1 className="mb-4 text-2xl font-semibold text-gray-700">Marketing Template</h1>
     <div className="flex flex-col gap-4">
     <LabeldInput
      label="Teamplate name"
        placeholder="Enter template name"
        className="w-full rounded-lg border-2 border-[#E0E0E0] focus:border-primary hover:border-primary focus:outline-none"
        allowClear
        showCount
        count={{
          max: 60
        }}
        size="large"
      />

  <LabeldInput
      label="Teamplate name"
        placeholder="Enter template name"
        className="w-full rounded-lg border-2 border-[#E0E0E0] focus:border-primary hover:border-primary focus:outline-none"
        allowClear
        showCount
        count={{
          max: 60
        }}
      />
     </div>
    </div>
  )
}

export default marketing
