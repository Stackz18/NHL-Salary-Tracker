import React, { useState } from "react";

export function Tabs({ children, defaultValue, className = "" }) {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        if (child.type === TabsList) {
          return React.cloneElement(child, { active, setActive });
        }
        if (child.type === TabsContent) {
          return active === child.props.value ? child : null;
        }
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, active, setActive }) {
  return (
    <div className="flex border-b border-gray-300 mb-4 space-x-4">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        return React.cloneElement(child, { active, setActive });
      })}
    </div>
  );
}

export function TabsTrigger({ value, children, active, setActive }) {
  const isActive = active === value;
  return (
    <button
      onClick={() => setActive && setActive(value)}
      className={`px-4 py-2 -mb-px border-b-2 font-medium ${
        isActive
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div>{children}</div>;
}