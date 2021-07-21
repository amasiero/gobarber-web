import React from 'react';
import { useAuth } from '../../hooks/auth';
const Dashboard: React.FC = () => {
	const { signOut } = useAuth();
	return <h1 onClick={() => signOut()}>Dashboard</h1>;
};

export default Dashboard;
