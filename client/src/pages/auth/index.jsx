import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");

  const handleChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 lg:py-6 border-b">
        <div className="flex items-center px-4 lg:px-8">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="font-extrabold text-xl text-gray-800">LMS LEARN</span>
          </Link>
        </div>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-white-800">
        <Tabs
          value={activeTab}
          onValueChange={handleChange}
          className="w-full max-w-md"
        >
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
           signin
          </TabsContent>
          <TabsContent value="signup">
          signup
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
