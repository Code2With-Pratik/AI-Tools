export default function ToolLayout({
  title,
  description,
  children,
  output,
}) {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-red-600">{title}</h1>
        <p className="text-gray-300">{description}</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="bg-gray-700 p-6 rounded-xl border">
          {children}
        </div>

        {/* Output */}
        <div className="bg-gray-700 p-6 rounded-xl border min-h-50">
          {output || (
            <p className="text-gray-400 text-sm">
              Output will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
