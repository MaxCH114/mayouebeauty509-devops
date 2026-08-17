variable "aws_region" {
  description = "AWS region where MayoueBeauty509 infrastructure will be deployed."
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment."
  type        = string
  default     = "dev"
}

variable "vpc_cidr" {
  description = "CIDR block for the MayoueBeauty509 VPC."
  type        = string
  default     = "10.0.0.0/16"
}


variable "cluster_name" {
  description = "Name of the MayoueBeauty509 EKS cluster."
  type        = string
  default     = "mayouebeauty509-dev"
}

variable "kubernetes_version" {
  description = "Kubernetes version for the EKS cluster."
  type        = string
  default     = "1.33"
}

variable "node_instance_types" {
  description = "EC2 instance types for the EKS managed node group."
  type        = list(string)
  default     = ["t3.medium"]
}

variable "node_min_size" {
  description = "Minimum number of EKS nodes."
  type        = number
  default     = 1
}

variable "node_max_size" {
  description = "Maximum number of EKS nodes."
  type        = number
  default     = 3
}

variable "node_desired_size" {
  description = "Desired number of EKS nodes."
  type        = number
  default     = 2
}
