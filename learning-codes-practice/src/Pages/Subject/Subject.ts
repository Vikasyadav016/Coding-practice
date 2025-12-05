export interface Subject {
  id: string;
  name: string;
  code: string;
  department: string;
  description?: string;
  status: 'active' | 'inactive';
}
