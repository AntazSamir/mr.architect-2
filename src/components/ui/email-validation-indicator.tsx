import * as React from "react"
import { motion } from "framer-motion"
import { Check, X, AlertCircle } from "lucide-react"

interface EmailValidationIndicatorProps {
  email: string
}

const validateEmail = (email: string): { isValid: boolean; message: string } => {
  if (!email) return { isValid: false, message: "" }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const hasAtSymbol = email.includes("@")
  const hasDomain = email.split("@")[1]?.includes(".")
  
  if (!hasAtSymbol) {
    return { isValid: false, message: "Missing @ symbol" }
  }
  
  if (!hasDomain) {
    return { isValid: false, message: "Missing domain (e.g., .com)" }
  }
  
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Invalid email format" }
  }
  
  return { isValid: true, message: "Valid email" }
}

export const EmailValidationIndicator: React.FC<EmailValidationIndicatorProps> = ({ email }) => {
  const { isValid, message } = validateEmail(email)

  if (!email || !message) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className="mt-1.5 flex items-center gap-1.5"
    >
      {isValid ? (
        <Check className="h-3.5 w-3.5 text-success" />
      ) : (
        <AlertCircle className="h-3.5 w-3.5 text-destructive" />
      )}
      <span className={`text-xs ${isValid ? "text-success" : "text-destructive"}`}>
        {message}
      </span>
    </motion.div>
  )
}
