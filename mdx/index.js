import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { api } from "@/utils/api";
import axios from "axios";
import useSWR from "swr";

const rootDirectory = path.join(process.cwd(), "data/blog");

export const getPostBySlug = async (slug) => {
  let filePath;
  const realSlug = slug.replace(/\.md$/, "");

  filePath = path.join(rootDirectory, `${realSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null; 
  }

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const post = await getPostBySlug(file);
    if (post) {
      posts.push(post.meta);
    }
  }

  return posts;
};

export const fetchArticleBySlug = async (slug) => {
  try {
    const response = await axios.get(api(`/article/${slug}`));
    return response.data; // Data artikel
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    // Fetch data dari beberapa endpoint
    const res1 = await axios.get(api('/promo'))
    const dataPromo = await res1.data

    const res2 = await axios.get(api('/article'))
    const dataArticle = await res2.data

    return { dataPromo, dataArticle }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getServerSideProps() {
  try {

    const { dataPromo, dataArticle } = await fetchData();
    
    // Kirim data ke komponen melalui props
    return {
      props: {
        dataPromo,
        dataArticle,
        message: 'SSR is working!',
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        dataPromo: null,
        dataArticle: null,
        error: 'Failed to fetch data',
      },
    };
  }
}

export const getAllPromo = async () => {
  try {
    const res = await axios.get(api("/promo-all"));
    const promoAll = await res.data
    
    return promoAll;
  } catch (err) {
    console.error("Error fetching all promos:", err);
    throw new Error("Failed to fetch promos");
  }
}

export const getDetailPromo = async ( slug ) => {
  try {
    const res = await axios.get(api("/promo/" + slug));
    const data = await res.data
    
    return data
  } catch (err) {
    if (err.response?.status === 404) {
      console.log('xxx')
      return { notFound: true }; // Redirect otomatis ke halaman 404
    }
    console.error("Error fetching show promo:", err);
    throw new Error("Failed to fetch promo");
  }
}

export const getAllArticles = async () => {
  try {
    const res = await axios.get(api("/article/all"));
    const articleAll = await res.data

    return articleAll;
  } catch (err) {
    console.error("Error fetching all promos:", err);
    throw new Error("Failed to fetch promos");
  }
}