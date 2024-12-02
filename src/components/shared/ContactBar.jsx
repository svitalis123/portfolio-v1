import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';

const ContactBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate your email service
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ fullName: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/+254726721982',
      color: 'green'
    },
    {
      icon: Phone,
      label: 'Call',
      href: 'tel:+254726721982',
      color: 'blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vitalismutwiri/',
      color: 'blue'
    },
    // {
    //   icon: Mail,
    //   label: 'Email',
    //   action: () => setIsModalOpen(true),
    //   color: 'red'
    // }
  ];

  return (
    <>
      {/* Floating Contact Bar */}
      <div className="fixed  right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 ">
        {contacts.map((contact, index) => (
          <div key={index} className="relative group flex">
            {contact.action ? (
              <button
                onClick={contact.action}
                className="p-3 bg-stone-900 text-stone-200 rounded-full transition-all duration-300 hover:scale-110 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <contact.icon size={24} />
              </button>
            ) : (
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-stone-900 text-stone-200 relative rounded-full w-fulltransition-all duration-300 hover:scale-110 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <contact.icon size={24} />
              </a>
            )}
            {/* Label that appears on hover */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-stone-900 text-stone-200 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {contact.label}
            </div>
          </div>
        ))}
      </div>

      {/* Email Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-stone-900 text-stone-200 border-red-600">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-600">Contact Me</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-stone-200">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-stone-200">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-stone-200">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600 min-h-[100px]"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactBar;