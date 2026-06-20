"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { CategoryBadge } from "@/components/blog/CategoryBadge";
import { formatReadTime } from "@/data/blog";
import { cardDarkGlass, iconSm } from "@/lib/styles";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`${cardDarkGlass} group flex h-full flex-col overflow-hidden`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-dark">
        <BlogCoverImage
          src={post.image}
          alt={post.imageAlt}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute left-3 top-3">
          <CategoryBadge categoryId={post.categoryId} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h2 className="text-h3 mb-2 line-clamp-2 text-white transition-colors group-hover:text-accent">
          {post.title}
        </h2>
        <p className="mb-5 line-clamp-3 flex-1 text-small leading-relaxed text-text-muted-dark">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-col gap-4 border-t border-border-on-dark pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-caption text-text-muted-dark">
            <span className="flex items-center gap-1.5">
              <Calendar className={iconSm} aria-hidden="true" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className={iconSm} aria-hidden="true" />
              {formatReadTime(post.readTimeMinutes)} okuma
            </span>
            <span className="flex items-center gap-1.5">
              <User className={iconSm} aria-hidden="true" />
              {post.author}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex shrink-0 items-center justify-center gap-2 self-end rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5 text-small font-semibold text-accent transition-all hover:border-accent/50 hover:bg-accent/20 hover:text-accent-hover"
          >
            Devamını Oku
            <ArrowRight
              className={`${iconSm} transition-transform group-hover:translate-x-0.5`}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
