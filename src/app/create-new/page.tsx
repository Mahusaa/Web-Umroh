"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F4q0knzZcqe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Select } from "~/components/ui/select"
import { Button } from "~/components/ui/button"
import { Form1 } from "~/components/form/Form1"
import { Form2 } from "~/components/form/Form2"

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    preferences: {
      newsletter: false,
      marketing: false,
    },
    payment: {
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
  })
  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }
  const handlePrev = () => {
    setCurrentStep(currentStep - 1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-10">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${step === currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">Step {currentStep} of 5</span>
            </div>
            <div className="h-1 bg-muted rounded-full mt-4">
              <div className="h-full bg-primary rounded-full" style={{ width: `${(currentStep / 5) * 100}%` }} />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="space-y-4 w-full">
                <Form1 />
              </div>
            )}
            {currentStep === 2 && (
              <div className="space-y-6 w-full">
                <Form2 />
              </div>
            )}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>
                      Subscribe to newsletter
                    </Label>
                  </div>
                  <div>
                    <Label>
                      Receive marketing updates
                    </Label>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="payment.cardNumber"
                      type="text"
                      value={formData.payment.cardNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="expMonth">Expiration Month</Label>
                    <Select
                      id="expMonth"
                      name="payment.expMonth"
                      value={formData.payment.expMonth}
                      required
                      onValueChange={handleChange}
                    >
                      <option value="">Select month</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expYear">Expiration Year</Label>
                    <Select
                      id="expYear"
                      name="payment.expYear"
                      value={formData.payment.expYear}
                      required
                      onValueChange={handleChange}
                    >
                      <option value="">Select year</option>
                      {Array.from({ length: 10 }, (_, i) => i + new Date().getFullYear()).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      name="payment.cvc"
                      type="text"
                      value={formData.payment.cvc}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
                  <p>
                    Please review the information you have provided and click "Submit" to complete your registration.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name:</Label>
                    <span>{formData.name}</span>
                  </div>
                  <div>
                    <Label>Email:</Label>
                    <span>{formData.email}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Phone:</Label>
                    <span>{formData.phone}</span>
                  </div>
                  <div>
                    <Label>Address:</Label>
                    <span>
                      {formData.address}, {formData.city}, {formData.state} {formData.zip}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Newsletter:</Label>
                    <span>{formData.preferences.newsletter ? "Subscribed" : "Not subscribed"}</span>
                  </div>
                  <div>
                    <Label>Marketing:</Label>
                    <span>{formData.preferences.marketing ? "Subscribed" : "Not subscribed"}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Card Number:</Label>
                    <span>
                      {formData.payment.cardNumber.slice(0, 4)}-{formData.payment.cardNumber.slice(4, 8)}-
                      {formData.payment.cardNumber.slice(8, 12)}-{formData.payment.cardNumber.slice(12)}
                    </span>
                  </div>
                  <div>
                    <Label>Expiration:</Label>
                    <span>
                      {formData.payment.expMonth}/{formData.payment.expYear}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button variant="outline" onClick={handlePrev}>
                  Previous
                </Button>
              )}
              {currentStep < 5 ? <Button onClick={handleNext}>Next</Button> : <Button type="submit">Submit</Button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
