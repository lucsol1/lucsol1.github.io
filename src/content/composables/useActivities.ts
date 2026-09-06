export interface Activity {
  id: string;
  title: string;
  type: string;
  label: string;
  date: string;
  description?: string;
  tags?: string[];
  github?: string;
  demo?: string;
  link?: string;
  body?: string;
  source?: string;
}


const blogFiles = import.meta.glob(
  "../blog/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

const projectFiles = import.meta.glob(
  "../projects/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

const files = { ...blogFiles, ...projectFiles };


function parseFrontmatter(content: string) {

  const match = content.match(
    /^---\n([\s\S]*?)\n---/
  );


  if (!match) {
    return {};
  }


  const frontmatter = match[1];


  if (!frontmatter) {
    return {};
  }


  const data: Record<string,string> = {};


  frontmatter.split("\n").forEach(line => {

    const [key, ...value] = line.split(":");


    if (key && value.length) {

      data[key.trim()] =
        value
          .join(":")
          .trim()
          .replace(/^"(.*)"$/, "$1");

    }

  });


  return data;
}



export const activities: Activity[] =

Object.entries(files)

.map(([path, content]) => {

  const data = parseFrontmatter(
    String(content)
  );

  return {
    id: data.id ?? crypto.randomUUID(),

    title: data.title ?? "Sem título",

    summary: data.summary ?? "Sem Descrição",
    type: data.type ?? "paper",

    label: data.title ?? "Sem título",

    date: data.date ?? "",

    description: data.summary ?? data.description ?? "",

    tags: data.tags
      ? data.tags.split(",").map(t => t.trim())
      : [],

    github: data.github,
    demo: data.demo,
    link: data.link,
    body: String(content).replace(/^---\n[\s\S]*?\n---\n?/, '').trim(),
    source: path.includes('projects/') ? 'project' : 'blog',
  };

})

.sort(
  (a,b) =>
    new Date(b.date).getTime()
    -
    new Date(a.date).getTime()
);
