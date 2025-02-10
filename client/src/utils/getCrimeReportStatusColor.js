export const getStatusColor = (status) => {
    switch (status) {
      case "SUBMITTED": return "bg-blue-100 text-blue-600";
      case "ACKNOWLEDGED": return "bg-green-100 text-green-600";
      case "REJECTED": return "bg-red-100 text-red-600";
      case "PENDING_ADDITIONAL_INFO": return "bg-yellow-100 text-yellow-600";
      case "RECEIVED": return "bg-purple-100 text-purple-600";
      case "UNDER_INVESTIGATION": return "bg-indigo-100 text-indigo-600";
      case "ON_HOLD": return "bg-orange-100 text-orange-600";
      case "RESOLVED": return "bg-teal-100 text-teal-600";
      case "CLOSED": return "bg-gray-100 text-gray-600";
      default: return "bg-red-100 text-red-600";
    }
  };