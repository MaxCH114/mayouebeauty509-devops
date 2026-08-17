provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "Mayoue_Beauty509"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}
