import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will contact you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-sacdap-grey mb-6">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-sacdap-grey mb-2">
            Full Name *
          </Label>
          <Input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
            className="focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-sacdap-grey mb-2">
            Email Address *
          </Label>
          <Input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email"
            className="focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="block text-sm font-medium text-sacdap-grey mb-2">
            Phone Number
          </Label>
          <Input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            className="focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div>
          <Label htmlFor="course" className="block text-sm font-medium text-sacdap-grey mb-2">
            Interested Course *
          </Label>
          <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
            <SelectTrigger className="focus:ring-2 focus:ring-primary focus:border-transparent">
              <SelectValue placeholder="Select a course category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="accounting">Accounting</SelectItem>
              <SelectItem value="sacdap2">SACDAP 2.0 (Stock Market)</SelectItem>
              <SelectItem value="it">IT Courses</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="message" className="block text-sm font-medium text-sacdap-grey mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell us about your learning goals..."
            className="focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <Button
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full bg-primary text-white hover:bg-primary/90"
        >
          {submitMutation.isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
