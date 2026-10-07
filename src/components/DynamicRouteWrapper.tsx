import { useParams } from 'react-router-dom';
import ServiceDetail from '@/pages/ServiceDetail';
import ServiceAreaDetail from '@/pages/ServiceAreaDetail';
import NotFound from '@/pages/NotFound';
import { services, serviceAreas } from '@/data/site-data';

export default function DynamicRouteWrapper() {
  const { slug } = useParams();
  
  if (services.some(s => s.slug === slug)) {
    return <ServiceDetail />;
  }
  
  if (serviceAreas.some(s => s.slug === slug)) {
    return <ServiceAreaDetail />;
  }
  
  return <NotFound />;
}
