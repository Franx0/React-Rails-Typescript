class ApplicationService
  def self.call(*args, &block)
    new(*args, &block).call
  end

  private

  def error_raiser(type = Exception, message = "ApplicationService exception")
    raise type, message
  rescue StandardError => e
    logger.error e
  end
end
