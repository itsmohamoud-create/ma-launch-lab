'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schema/auth";
import { authenticatePrincess } from "@/lib/actions/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { z } from "zod";

export default function PrincessGate() {
  const [error, setError] = useState("");
  const router = useRouter();
  
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { password: "" }
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setError("");
    const res = await authenticatePrincess(data);
    if (res.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-card border border-purple/20 p-8 rounded-2xl shadow-[0_0_50px_rgba(124,58,237,0.1)]">
        <h1 className="text-2xl font-bold text-center mb-2">Legacy Access</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Restricted Area. Authorized Personnel Only.</p>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input 
              {...form.register("password")}
              type="password" 
              placeholder="Enter Access Key"
              className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-all"
            />
            {form.formState.errors.password && (
              <p className="text-red-500 text-xs mt-1">{form.formState.errors.password.message}</p>
            )}
          </div>
          
          {error && <div className="p-3 bg-red-500/10 text-red-500 text-sm rounded-lg text-center">{error}</div>}
          
          <Button 
            type="submit" 
            className="w-full" 
            isLoading={form.formState.isSubmitting}
          >
            Unlock System
          </Button>
        </form>
      </div>
    </div>
  );
}
