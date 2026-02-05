import * as React from "react"
import { ChevronLeft, Github, Twitter, Mail, ArrowLeft, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { PasswordStrengthIndicator } from "./password-strength-indicator"
import { EmailValidationIndicator } from "./email-validation-indicator"
import { Link, useNavigate } from "react-router-dom"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface AuthFormProps {
  mode?: "signin" | "signup"
}

const AuthForm: React.FC<AuthFormProps> = ({ mode = "signin" }) => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center text-foreground selection:bg-primary/30 relative overflow-hidden">
      <BackButton />
      {/* Base Grid Pattern overlaid on screen */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="relative z-10 mx-auto w-full max-w-md p-6 glass-card rounded-2xl shadow-elegant"
      >
        <Logo />
        <Header mode={mode} />
        <SocialButtons mode={mode} />
        <Divider />
        <LoginForm mode={mode} />
        <TermsAndConditions />
      </motion.div>
      <BackgroundDecoration />
    </div>
  )
}

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-6 left-6 z-20">
      <SocialButton icon={<ChevronLeft size={16} />} onClick={() => navigate(-1)}>Go back</SocialButton>
    </div>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-lg font-bold text-primary-foreground 
    shadow-lg hover:shadow-glow-cyan transition-all hover:scale-[1.02] active:scale-[0.98] 
    disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Logo: React.FC = () => null;

const Header: React.FC<{ mode: "signin" | "signup" }> = ({ mode }) => (
  <div className="mb-6 text-center">
    <h1 className="text-2xl font-semibold tracking-tight text-foreground">
      {mode === "signin" ? "Welcome back" : "Create an account"}
    </h1>
    <p className="mt-2 text-sm text-muted-foreground">
      {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
      <Link
        to={mode === "signin" ? "/signup" : "/signin"}
        className="text-primary hover:text-accent transition-colors font-medium hover:underline underline-offset-4"
      >
        {mode === "signin" ? "Create one" : "Sign in"}
      </Link>
    </p>
  </div>
)

const SocialButtons: React.FC<{ mode: "signin" | "signup" }> = ({ mode }) => (
  <div className="mb-6 space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <SocialButton icon={<Twitter size={18} />} />
      <SocialButton icon={<Github size={18} />} />
      <SocialButton fullWidth>
        {mode === "signin" ? "Sign in with SSO" : "Sign up with SSO"}
      </SocialButton>
    </div>
  </div>
)

const SocialButton: React.FC<{
  icon?: React.ReactNode
  fullWidth?: boolean
  children?: React.ReactNode
  onClick?: () => void
}> = ({ icon, fullWidth, children, onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className={`relative flex items-center justify-center gap-2 rounded-lg 
    border border-border bg-card/50 px-4 py-2 font-medium text-foreground transition-all duration-300
    hover:bg-accent/10 hover:border-accent/50 hover:text-accent hover:shadow-glow-violet
    active:scale-95 text-sm
    ${fullWidth ? "col-span-2" : ""}`}
  >
    {icon}
    <span>{children}</span>
  </button>
)

const Divider: React.FC = () => (
  <div className="my-6 flex items-center gap-3">
    <div className="h-[1px] w-full bg-border" />
    <span className="text-xs text-muted-foreground font-medium uppercase">OR</span>
    <div className="h-[1px] w-full bg-border" />
  </div>
)

const LoginForm: React.FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false)
  const [password, setPassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  const handleSubmit = (e: React.FormEvent) => e.preventDefault()

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "signup" && (
          <div className="space-y-1.5">
            <label
              htmlFor="name-input"
              className="block text-sm font-medium text-muted-foreground"
            >
              Full Name
            </label>
            <input
              id="name-input"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-input bg-secondary/50 px-3 py-2 text-foreground
              placeholder:text-muted-foreground/50
              focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
            />
          </div>
        )}
        <div className="space-y-1.5">
          <label
            htmlFor="email-input"
            className="block text-sm font-medium text-muted-foreground"
          >
            Email
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="your.email@provider.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-input bg-secondary/50 px-3 py-2 text-foreground
            placeholder:text-muted-foreground/50
            focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
          />
          <AnimatePresence>
            {mode === "signup" && <EmailValidationIndicator email={email} />}
          </AnimatePresence>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password-input"
              className="block text-sm font-medium text-muted-foreground"
            >
              Password
            </label>
            {mode === "signin" && (
              <button
                type="button"
                onClick={() => setForgotPasswordOpen(true)}
                className="text-xs text-primary hover:text-accent transition-colors"
              >
                Forgot password?
              </button>
            )}
          </div>
          <input
            id="password-input"
            type="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-input bg-secondary/50 px-3 py-2 text-foreground
            placeholder:text-muted-foreground/50
            focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
          />
          <AnimatePresence>
            {mode === "signup" && <PasswordStrengthIndicator password={password} />}
          </AnimatePresence>
        </div>
        <Button type="submit" className="w-full mt-2">
          {mode === "signin" ? "Sign in" : "Sign up"}
        </Button>
      </form>

      <ForgotPasswordDialog 
        open={forgotPasswordOpen} 
        onOpenChange={setForgotPasswordOpen} 
      />
    </>
  )
}

const ForgotPasswordDialog: React.FC<{
  open: boolean
  onOpenChange: (open: boolean) => void
}> = ({ open, onOpenChange }) => {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call - replace with actual password reset logic
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSuccess(true)
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after dialog closes
    setTimeout(() => {
      setEmail("")
      setIsSuccess(false)
    }, 200)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md glass-card border-border">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="text-left">
                <div className="mb-2 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <DialogTitle className="text-xl font-semibold text-foreground">
                  Reset your password
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Enter your email address and we'll send you a link to reset your password.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="reset-email"
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    Email address
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@provider.com"
                    className="w-full rounded-lg border border-input bg-secondary/50 px-3 py-2 text-foreground
                    placeholder:text-muted-foreground/50
                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-sm font-semibold text-primary-foreground 
                  shadow-lg hover:shadow-glow-cyan transition-all hover:scale-[1.02] active:scale-[0.98] 
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to sign in
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-4"
            >
              <div className="mb-4 mx-auto inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success">
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </div>
              <DialogTitle className="text-xl font-semibold text-foreground mb-2">
                Check your email
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mb-6">
                We've sent a password reset link to<br />
                <span className="text-foreground font-medium">{email}</span>
              </DialogDescription>
              <button
                onClick={handleClose}
                className="rounded-lg border border-border bg-card/50 px-6 py-2 text-sm font-medium text-foreground 
                hover:bg-accent/10 hover:border-accent/50 transition-all"
              >
                Done
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

const TermsAndConditions: React.FC = () => (
  <p className="mt-6 text-xs text-muted-foreground text-center">
    By continuing, you agree to our{" "}
    <Link to="/terms" className="text-primary hover:text-accent underline underline-offset-2">
      Terms
    </Link>{" "}
    and{" "}
    <Link to="/terms" className="text-primary hover:text-accent underline underline-offset-2">
      Privacy Policy
    </Link>
    .
  </p>
)

const BackgroundDecoration: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Restored SVG Grid - Recolored to Cyan */}
      <div
        className="absolute right-0 top-0 h-[50vw] w-[50vw] opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgba(34, 211, 238, 0.4)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at top right, transparent 0%, hsl(var(--background)) 70%)"
          }}
        />
      </div>

      {/* Top Right Glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[100px]" />
      {/* Bottom Left Glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[100px]" />
    </div>
  )
}

export default AuthForm
