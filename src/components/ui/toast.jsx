import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"

// Toast Provider
export const ToastProvider = ToastPrimitive.Provider

// Toast container for positioning
export const ToastViewport = (props) => (
  <ToastPrimitive.Viewport
    className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[360px] z-50 outline-none"
    {...props}
  />
)

// Individual Toast
export const Toast = React.forwardRef(({ children, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    {...props}
    className="bg-card text-foreground p-4 rounded-md shadow-lg border border-border flex items-start justify-between gap-2"
  >
    {children}
  </ToastPrimitive.Root>
))
Toast.displayName = "Toast"

// Toast Title
export const ToastTitle = React.forwardRef(({ children, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} {...props} className="font-semibold text-sm">
    {children}
  </ToastPrimitive.Title>
))
ToastTitle.displayName = "ToastTitle"

// Toast Description
export const ToastDescription = React.forwardRef(({ children, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} {...props} className="text-sm text-muted-foreground">
    {children}
  </ToastPrimitive.Description>
))
ToastDescription.displayName = "ToastDescription"

// Toast Close button
export const ToastClose = React.forwardRef(({ children, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    {...props}
    className="ml-4 text-muted-foreground hover:text-foreground transition-colors"
  >
    {children || "✕"}
  </ToastPrimitive.Close>
))
ToastClose.displayName = "ToastClose"
