"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GrainBackground from "@/components/GrainBackground";
import NavHeader from "@/components/NavHeader";
import PageTransition from "@/components/PageTransition";
import { UserProfile } from "@/types";
import { 
  User, 
  Sparkles, 
  Film, 
  Settings, 
  ChevronRight,
  Mail,
  LogOut
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile>({
    name: "创作者",
    avatar: "U",
    credits: 10,
    tier: "starter",
    projects: 3,
  });

  useEffect(() => {
    const saved = localStorage.getItem("framex_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const tierLabels = {
    starter: "Starter",
    pro: "Professional",
    studio: "Studio",
  };

  const tierColors = {
    starter: "text-cream-dim",
    pro: "text-gold",
    studio: "text-brand-red",
  };

  const recentProjects = [
    { id: 1, title: "雨夜便利店", date: "2024-01-15", type: "短剧" },
    { id: 2, title: "都市爱情故事", date: "2024-01-12", type: "短片" },
    { id: 3, title: "悬疑开场", date: "2024-01-10", type: "广告" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <GrainBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <NavHeader />

        <PageTransition className="flex-1 px-6 lg:px-10 py-8 pt-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6 mb-10"
            >
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-gold-dim border border-gold/30 flex items-center justify-center text-3xl font-semibold text-gold"
                whileHover={{ scale: 1.05 }}
              >
                {user.avatar}
              </motion.div>

              <div className="flex-1">
                <h1 className="text-2xl font-medium text-cream mb-1">{user.name}</h1>
                <div className="flex items-center gap-3 text-sm">
                  <span className={`font-medium ${tierColors[user.tier]}`}>
                    {tierLabels[user.tier]}
                  </span>
                  <span className="text-cream-dim">·</span>
                  <span className="text-cream-dim">{user.projects} 个项目</span>
                </div>
              </div>

              <motion.button
                className="px-5 py-2.5 border border-border rounded-xl text-sm text-cream-dim hover:text-cream hover:border-gold/40 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Settings className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10"
            >
              <motion.div 
                className="p-5 rounded-2xl border border-border bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
                whileHover={{ y: -4, borderColor: "rgba(212,168,75,0.3)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gold-dim flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-cream-dim text-sm">剩余 Credits</span>
                </div>
                <div className="text-2xl font-semibold text-cream">{user.credits}</div>
              </motion.div>

              <motion.div 
                className="p-5 rounded-2xl border border-border bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
                whileHover={{ y: -4, borderColor: "rgba(212,168,75,0.3)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gold-dim flex items-center justify-center">
                    <Film className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-cream-dim text-sm">项目数量</span>
                </div>
                <div className="text-2xl font-semibold text-cream">{user.projects}</div>
              </motion.div>

              <motion.div 
                className="p-5 rounded-2xl border border-border bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
                whileHover={{ y: -4, borderColor: "rgba(212,168,75,0.3)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="text-cream-dim text-sm">会员等级</span>
                </div>
                <div className={`text-2xl font-semibold ${tierColors[user.tier]}`}>
                  {tierLabels[user.tier]}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-medium text-cream">最近项目</h2>
                <motion.button 
                  className="text-sm text-gold hover:text-gold-bright flex items-center gap-1"
                  whileHover={{ x: 4 }}
                >
                  查看全部
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="space-y-3">
                {recentProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-border bg-gradient-to-r from-white/[0.03] to-transparent hover:border-gold/30 transition-all cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-void-lighter flex items-center justify-center text-lg">
                        🎬
                      </div>
                      <div>
                        <div className="text-cream font-medium">{project.title}</div>
                        <div className="text-cream-dim text-xs">{project.date} · {project.type}</div>
                      </div>
                    </div>
                    
                    <ChevronRight className="w-5 h-5 text-cream-dim" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <motion.a
                href="mailto:dumccchr@icloud.com"
                className="flex items-center justify-between p-4 rounded-xl border border-border bg-gradient-to-r from-white/[0.03] to-transparent hover:border-gold/30 transition-all"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-dim flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-cream">联系我们</span>
                </div>
                <ChevronRight className="w-5 h-5 text-cream-dim" />
              </motion.a>

              <motion.button
                className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-gradient-to-r from-white/[0.03] to-transparent hover:border-brand-red/30 transition-all"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center">
                    <LogOut className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="text-cream">退出登录</span>
                </div>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-center"
            >
              <motion.button
                onClick={() => router.push("/")}
                className="text-sm text-cream-dim hover:text-cream transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                ← 返回首页
              </motion.button>
            </motion.div>
          </div>
        </PageTransition>
      </div>
    </main>
  );
}
