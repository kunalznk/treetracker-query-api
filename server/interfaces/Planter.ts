export default interface Planter {
  id: number;
  first_name: string;
  last_name: string;
  links: {
    featured_trees: string;
    associated_organizations: string;
    species: string;
  };
}
