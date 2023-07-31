export interface ComponentProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
