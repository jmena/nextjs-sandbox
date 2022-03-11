import { people } from "raw/people";

export default function handler(req, res) {
  res.status(200).json(people);
  // res.status(200).json({ name: 'John Doe' })
}
