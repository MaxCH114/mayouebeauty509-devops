provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "MayoueBeauty509"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}
