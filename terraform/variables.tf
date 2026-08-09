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
