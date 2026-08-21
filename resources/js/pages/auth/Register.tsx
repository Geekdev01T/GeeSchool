import { Link, usePage } from '@inertiajs/react';
import { Lock, Mail, User, ArrowRight, Eye, Shield, Book, GraduationCap, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export function Register() {
  const navigate = usePage();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration then redirect
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Left side - Visual overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0B2165] items-center justify-center p-12 overflow-hidden">
        {/* Abstract background representation (Modern Library / Campus) */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2165]/90 via-[#2563EB]/80 to-[#0B2165]/90" />
        
        {/* Floating Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', damping: 25 }}
          className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-white/20 shrink-0 flex items-center justify-center text-white shadow-inner backdrop-blur-md">
              <Building2 size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Le futur de la gestion scolaire</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                Rejoignez des centaines d'établissements qui font confiance à GeeSchool pour simplifier leur quotidien, fluidifier la communication et moderniser leurs processus administratifs et pédagogiques.
              </p>
              <div className="mt-6 flex gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white backdrop-blur-sm border border-white/10">Innovant</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white backdrop-blur-sm border border-white/10">Collaboratif</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side - Register Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white p-6 sm:p-8 lg:p-16 relative">
        <motion.div 
          className="w-full max-w-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-10 text-center sm:text-left">
            <div className="w-16 h-16 bg-[#F0F7FF] rounded-xl flex items-center justify-center mb-6 mx-auto sm:mx-0 border border-[#E0EFFF] shadow-sm">
              <div className="relative">
                <Shield size={32} className="text-[#0B2165]" />
                <Book size={14} className="text-[#0B2165] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-0.5" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Créer un compte</h1>
            <p className="text-slate-500">Rejoignez l'écosystème GeeSchool dès aujourd'hui.</p>
          </motion.div>

          <form onSubmit={handleRegister} className="space-y-5">
            
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Nom complet de l'établissement</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <GraduationCap size={18} className="text-slate-400 group-focus-within:text-[#0B2165] transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Ex: Complexe Scolaire d'Excellence"
                  className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-white focus:bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0B2165]/10 focus:border-[#0B2165] transition-all"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Email professionnel</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-400 group-focus-within:text-[#0B2165] transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="direction@geeschool.edu"
                  className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-white focus:bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0B2165]/10 focus:border-[#0B2165] transition-all"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Mot de passe</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400 group-focus-within:text-[#0B2165] transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-10 py-3 border border-slate-200 rounded-xl bg-white focus:bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0B2165]/10 focus:border-[#0B2165] transition-all font-medium"
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-[#0B2165] transition-colors"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Confirmation</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400 group-focus-within:text-[#0B2165] transition-colors" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-10 py-3 border border-slate-200 rounded-xl bg-white focus:bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0B2165]/10 focus:border-[#0B2165] transition-all font-medium"
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-[#0B2165] transition-colors"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-3 pt-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] transition-colors cursor-pointer" 
                required
              />
              <span className="text-sm text-slate-600 leading-relaxed">
                J'accepte les <a href="#" className="text-[#2563EB] hover:underline font-semibold">Conditions d'utilisation</a> et la <a href="#" className="text-[#2563EB] hover:underline font-semibold">Politique de confidentialité</a> de GeeSchool.
              </span>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#0B2165] transition-duration-300 cursor-pointer hover:bg-[#071647] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-900/20 mt-2"
            >
              Créer mon compte
              <ArrowRight size={18} />
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="mt-8 text-center text-sm text-slate-600 font-medium">
            Vous avez déjà un compte ?{' '}
            <Link href={"/login"} className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors font-bold hover:underline">
              Se connecter
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;