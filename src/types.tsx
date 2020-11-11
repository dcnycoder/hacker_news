export type Story = {
  objectID: string;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
}
export type ListProps = {
  stories: Array<Story>
  search: string
  removeStory: (id: string) => void
  nested: {
    ownerName: string
    pet: {
      name: string
      age: number
    }
  }
}