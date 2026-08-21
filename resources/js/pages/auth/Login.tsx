import { Link, usePage } from '@inertiajs/react';
import { Lock, User, ArrowRight, Eye, Shield, Book, UserCircle, Users, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export function Login() {
  const navigate = usePage();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
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
      {/* Left side - Login Form */}
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
            
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Bienvenue sur GeeSchool</h1>
            <p className="text-slate-500">Le système de gestion scolaire intelligent</p>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-6">
            
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Email professionnel</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-slate-400 group-focus-within:text-[#0B2165] transition-colors" />
                </div>
                <input
                  type="email"
                  defaultValue="admin@geeschool.edu"
                  className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl bg-white focus:bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0B2165]/10 focus:border-[#0B2165] transition-all"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Mot de passe</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-400 group-focus-within:text-[#0B2165] transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue="password123"
                  className="block w-full pl-11 pr-12 py-3.5 border border-slate-200 rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#0B2165]/10 focus:border-[#0B2165] transition-all text-slate-900 tracking-wider font-medium"
                  required
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#0B2165] transition-colors"
                >
                  <Eye size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  defaultChecked
                  className="w-4 h-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] transition-colors cursor-pointer" 
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors">
                Mot de passe oublié ?
              </a>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#0B2165] transition-duration-300 cursor-pointer hover:bg-[#071647] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-900/20 mt-4"
            >
              Accéder à mon espace
              <ArrowRight size={18} />
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="mt-8 text-center text-sm text-slate-600 font-medium">
            Pas encore de compte ?{' '}
            <Link href="{/register}" className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors font-bold hover:underline">
              S'inscrire
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-sm text-slate-500">
            <UserCircle size={16} />
            Besoin d'aide ? <a href="mailto:tresormetikwe@gmail.com" className="text-[#2563EB] hover:underline font-semibold">Contacter le support</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side - Visual overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0B2165] items-center justify-center p-12 overflow-hidden">
        {/* Abstract background representation (Modern School/Campus) */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2165]/90 via-[#0B2165]/80 to-[#2563EB]/60" />
        
        {/* Floating Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', damping: 25 }}
          className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="flex gap-6 items-start">
            <div className="w-14 h-14 rounded-xl bg-white/20 shrink-0 flex items-center justify-center text-white shadow-inner backdrop-blur-md">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">L'excellence éducative</h3>
              <p className="text-blue-100 leading-relaxed text-sm">
                GeeSchool centralise la gestion de votre établissement. Que vous soyez administrateur, membre du secrétariat ou enseignant, retrouvez tous vos outils dans un environnement sécurisé et intuitif.
              </p>
              <div className="mt-6 flex gap-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white backdrop-blur-sm border border-white/10">Rapide</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white backdrop-blur-sm border border-white/10">Sécurisé</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white backdrop-blur-sm border border-white/10">Intuitif</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


export default Login;