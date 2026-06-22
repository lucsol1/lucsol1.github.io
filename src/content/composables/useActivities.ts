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
}


const files = import.meta.glob(
  "../blog/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);


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

Object.values(files)

.map((content)=>{


  const data = parseFrontmatter(
    String(content)
  );


  return {

    type: data.type ?? "paper",

    label: data.title ?? "Sem título",

    date: data.date ?? "",

    description: data.description ?? "",

    tags: data.tags
      ? data.tags.split(",").map(t=>t.trim())
      : [],

    github: data.github,

    demo: data.demo

  };


})

.sort(
  (a,b)=>
    new Date(b.date).getTime()
    -
    new Date(a.date).getTime()
);