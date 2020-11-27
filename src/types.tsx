export interface AppContextType {
  color?: string;
  size?: number;
}

export type Consumer = {
  children: any
}

export type Story = {
  objectID: string;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
}
export type Stories = Array<Story>

export type StoriesState = {
  data: Stories;
  search: string;
  isLoading: boolean;
  isError: boolean;
}

export type ListProps = {
  stories: Stories
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

export type ItemProps = {
  story: Story, 
  removeStory: (id: string) => void
}

export type SearchFormProps = {
  search: string,
  labelName: string,
  name: string,
  type: "text",
  id: string,
  handleSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void, 
  children?: any
}

export type NavigationProps = {
  children?: any
}

interface StoriesFetchInitAction {
  type: "STORIES_FETCH_INIT";
}
interface StoriesFetchSuccessAction {
  type: "STORIES_FETCH_SUCCESS",
  payload: {
    data: Stories,
    sumComments: number
  }
}
interface StoriesFetchFailureAction {
  type: "STORIES_FETCH_FAILURE",
  payload: string
}
interface StoriesRemoveAction {
  type: "REMOVE_STORY",
  payload: string
}

export type StoriesAction = 
   | StoriesFetchInitAction
   | StoriesFetchSuccessAction
   | StoriesFetchFailureAction
   | StoriesRemoveAction
